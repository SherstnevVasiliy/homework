import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILampProps} from '../../../models/lampList/lampListInterface';
import Counter from '../../Counter/Counter';

const Lamp = ({
  title,
  brend,
  typeItem,
  technology,
  power,
  lampBase,
  light,
  image,
  price,
  clickHandler,
}: ILampProps) => {
  const changeHandler = useCallback(
    (count: number) => {
      if (clickHandler) {
        clickHandler(title, count);
      }
    },
    [clickHandler, title],
  );
  return (
    <View style={styles.lampWrapper}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`${price}p`}</Text>
        <Image source={{uri: image}} style={styles.img} />
        <Counter clickHandler={changeHandler} />
      </View>
      <View style={styles.descriptionsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descriptions}>
          {`\nБрэнд: ${brend}\nТип товара: ${typeItem}\nТехнология: ${technology}\nМощность ${power},Вт\nТип цоколя: ${lampBase}\nСвет: ${light}`}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Lamp);

const styles = StyleSheet.create({
  lampWrapper: {
    alignItems: 'center',
  },
  descriptionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 26,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 16,
  },
  descriptions: {
    fontSize: 12,
    color: 'grey',
    paddingVertical: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 24,
  },
});

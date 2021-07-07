/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILampListProps} from '../../../models/lampList/lampListInterface';

const Lamp = ({
  id,
  title,
  brend,
  typeItem,
  technology,
  power,
  lampBase,
  light,
  image,
  price,
}: ILampListProps) => {
  return (
    <View style={styles.lampWrapper}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`${price}p`}</Text>
        <Image source={{uri: image}} style={styles.img} />
      </View>
      <View style={styles.descriptionsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descriptions}>{`Брэнд: ${brend}`}</Text>
        <Text style={styles.descriptions}>{`Тип товара: ${typeItem}`}</Text>
        <Text style={styles.descriptions}>{`Технология: ${technology}`}</Text>
        <Text style={styles.descriptions}>{`Мощность ${power},Вт`}</Text>
        <Text style={styles.descriptions}>{`Тип цоколя: ${lampBase}`}</Text>
        <Text style={styles.descriptions}>{`Свет: ${light}`}</Text>
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
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 24,
  },
});

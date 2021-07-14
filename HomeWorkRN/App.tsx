/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header/Header';
import LampList from './src/components/LampList/LampList';
import {lampList} from './src/data/data';

const App: React.FunctionComponent = () => {
  const [cart, setCart] = useState({});
  const onPress = useCallback(
    () => Alert.alert('Заказ', `Вы заказали ${JSON.stringify(cart)}`),
    [cart],
  );
  const clickHandler = useCallback(
    (title, count) => {
      setCart({
        ...cart,
        [title]: count,
      });
    },
    [setCart, cart],
  );
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title="Lamp App" />
      <LampList lampList={lampList} clickHandler={clickHandler} />
      <TouchableOpacity style={styles.orderButtonWrapper} onPress={onPress}>
        <Text style={styles.orderButtonList}>Заказать</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  orderButtonWrapper: {
    marginVertical: 8,
    justifyContent: 'center',
    backgroundColor: 'darkcyan',
    borderRadius: 4,
    height: 40,
    width: '100%',
  },
  orderButtonList: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
});

export default App;

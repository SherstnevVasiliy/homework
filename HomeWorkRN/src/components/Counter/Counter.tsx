import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AddIcon from '../../assets/icons/AddIcon';
import RemoveIcon from '../../assets/icons/RemoveIcon';
import {CounterProps} from '../../models/counter/CounterModels';

const Counter = ({clickHandler}: CounterProps) => {
  const [currentCount, setCurrentCount] = useState(0);
  const onIncrement = useCallback(() => {
    setCurrentCount(prevValue => prevValue + 1);
    if (clickHandler) {
      clickHandler(currentCount + 1);
    }
  }, [setCurrentCount, clickHandler, currentCount]);
  const onDecrement = useCallback(() => {
    setCurrentCount(prevValue => prevValue - 1);
    if (clickHandler) {
      clickHandler(currentCount - 1);
    }
  }, [setCurrentCount, clickHandler, currentCount]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onIncrement}>
        <AddIcon color="green" />
      </TouchableOpacity>
      <Text style={styles.counter}>{currentCount}</Text>
      <TouchableOpacity onPress={onDecrement}>
        <RemoveIcon color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 20,
  },
  counter: {
    marginVertical: 16,
    fontSize: 32,
  },
});

export default React.memo(Counter);

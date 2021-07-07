import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ILampProps} from '../../models/lampList/lampListInterface';
import Lamp from './Lamp/Lamp';

const LampList = ({lampList}: ILampProps) => {
  if (!lampList || !lampList.length) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const renederItem = useCallback(item => {
    return (
      <Lamp
        key={item.item.id}
        id={item.item.id}
        title={item.item.title}
        brend={item.item.brend}
        technology={item.item.technology}
        typeItem={item.item.typeItem}
        power={item.item.power}
        lampBase={item.item.lampBase}
        light={item.item.light}
        image={item.item.image}
        price={item.item.price}
      />
    );
  }, []);

  return <FlatList data={lampList} renderItem={renederItem} />;
};

export default LampList;

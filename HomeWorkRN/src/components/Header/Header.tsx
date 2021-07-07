import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {IHeaderProps} from '../../models/header/headerInterface';

const Header = ({title}: IHeaderProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'darkcyan',
    textAlign: 'center',
    paddingTop: 32,
  },
});

export default React.memo(Header);

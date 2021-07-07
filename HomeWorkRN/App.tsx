import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './src/components/Header/Header';
import LampList from './src/components/LampList/LampList';
import {lampList} from './src/data/data';

const App: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title="Lamp App" />
      <LampList lampList={lampList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

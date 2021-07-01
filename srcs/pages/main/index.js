/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Entries';

const Main = ({navigation}) => {
  const save = () => {
    saveEntry();
  };

  return (
    <View style={styles.container}>
      <BalancePanel />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <Button title="Testa Save" onPress={save} />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;

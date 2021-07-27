/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';
import Colors2 from '../../styles/Colors2';
// import manager from './manager';
import { BleManager } from 'react-native-ble-plx';

var manager = new BleManager()

const Main = ({navigation}) => {
  
  


  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary
          onPressActionButton={() => navigation.navigate('Report')}
        />
        <EntryList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors2.Green1,
  },
});

export default Main;

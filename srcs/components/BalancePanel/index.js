import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel() {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1, 
  }
})
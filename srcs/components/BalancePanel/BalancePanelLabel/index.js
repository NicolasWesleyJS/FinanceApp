/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function BalancePanelLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>R$ 6.500,00</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
//    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 24,
  },
});

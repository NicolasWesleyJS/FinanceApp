import React from 'react';
import {View, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/Colors';
import Colors2 from '../../styles/Colors2';
import LinearGradient from 'react-native-linear-gradient';
export default function BalancePanel() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors2.Blue1} />
      <LinearGradient
        colors={[Colors2.Blue1, Colors2.Blue2]}
        style={styles.panel}>
        <BalancePanelLabel />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: -23,
  },
  panel: {},
  button: {
    backgroundColor: Colors.green,
    borderRadius: 150,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    elevation: 5,
    marginTop: -25,
    marginRight: 10,
  },
});

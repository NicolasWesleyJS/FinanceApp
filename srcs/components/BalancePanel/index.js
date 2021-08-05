import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/Colors';
import Colors2 from '../../styles/Colors2';
import LinearGradient from 'react-native-linear-gradient';

export default function BalancePanel({onNewEntryPress}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors2.Blue1} />
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: -23,
  },
  panel: {
    paddingVertical: 10,
  },
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
    marginRight: 20,
  },
});

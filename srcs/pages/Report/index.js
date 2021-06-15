import React from 'react'
import { View, StyleSheet  } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label='Todas as Categorias'></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label='Últimos 7 dias'></Picker.Item>
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1
  }
})


export default Report

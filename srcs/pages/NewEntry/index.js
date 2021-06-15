import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import BalanceLabel from '../../components/BalanceLabel'

const NewEntry = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <Button title='GPS'></Button>
        <Button title='Câmera'></Button>
      </View>

      <View>
        <Button title='Adicionar'></Button>
        <Button title='Cancelar' onPress={()=>navigation.goBack()}></Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  }
})


export default NewEntry

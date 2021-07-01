import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const [amount, setAmount] = useState('0');

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };
    saveEntry(value);
    console.log('NewEntry :: save ', value);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Testa Entry" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;

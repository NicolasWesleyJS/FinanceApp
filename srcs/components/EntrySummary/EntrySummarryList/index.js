import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

export default function EntrySummaryList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Alimentação: $ 200,00'},
          {key: 'Transporte: $ 60,00'},
          {key: 'Cartão de Crédito: $ 500,00'},
          {key: 'Internet: $ 149,90'},
          {key: 'Energia: $ 100,00'},
          {key: 'Casa: $ 158,00'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    //  flex: 1,
  },
});

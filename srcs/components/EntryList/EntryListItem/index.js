import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native'

export default function EntryListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList 
        data={[
          {key: 'Padaria: R$ 200,00'},
          {key: 'Unicompras: R$ 60,00'},
          {key: 'Posto de combustível: R$ 40,00'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}

      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  }
  
})
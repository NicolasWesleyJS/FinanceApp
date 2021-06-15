import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import EntryListItem from './EntryListItem'

export default function EntryList() {
  return (
    <View style={style.container}>
      <EntryListItem />
    </View>
  )
}

const style = StyleSheet.create({
  container: {

  }
})
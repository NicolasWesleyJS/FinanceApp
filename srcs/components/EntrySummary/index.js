import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import EntrySummaryList from './EntrySummarryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../../components/Core/Container';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EntrySummary() {
  return (
    <Container
      title="Categorias de Despesas"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    margin: 5,
    padding: 8,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
});

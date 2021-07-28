import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EntrySummaryList from './EntrySummarryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../../components/Core/Container';

export default function EntrySummary() {
  return (
    <Container
      title="Categorias"
      actionLabelText={'Últimos Dias'}
      actionButtonText="Ver mais"
      onPressActionButton={() => console.log('Botão Pressionado!')}>
      <View style={styles.inner}>
        <EntrySummaryList />
        <EntrySummaryChart />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

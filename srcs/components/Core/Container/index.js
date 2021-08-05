import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';

const Container = ({
  children,
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
      {(actionButtonText || actionLabelText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Icon name="insert-chart" style={styles.actionButtonIcon} />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

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
  title: {
    fontSize: 12,
    marginBottom: 10,
    color: Colors.white,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    justifyContent: 'flex-end',
    fontSize: 12,
    color: Colors.white,
  },
  actionButtonIcon: {
    flexDirection: 'row',
    color: Colors.white,
    marginTop: 3,
    marginRight: 2,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default Container;

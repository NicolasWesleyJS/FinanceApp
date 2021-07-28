import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native';

import Colors from '../../../styles/Colors';

const Container = ({
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  children,
}) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
      
      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && <Text>{actionLabelText}</Text>}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Text style={styles.actionButtonText}></Text>
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
  },
  title: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
});

export default Container;
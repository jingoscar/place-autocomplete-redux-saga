import React from 'react';
import { Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../styles/globalStyles';

const places = () => {
    return (
      <View style={styles.container}>
        <FlatList />
      </View>
    );
  };

export default places;
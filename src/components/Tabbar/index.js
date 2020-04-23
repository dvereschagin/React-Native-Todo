import React, { Component } from 'react';
import { View } from 'react-native';

// Components
import AddButton from '../AddButton';

// Styles
import styles from './styles';

export default class Tabbar extends Component {
  render() {
    const { handleAdd } = this.props;

    return (
      <View style={styles.container}>
        <AddButton onPress={handleAdd}/>
      </View>
    );
  }
}
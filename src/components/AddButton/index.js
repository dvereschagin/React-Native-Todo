import { TouchableOpacity, Image, View } from 'react-native';
import React, { Component } from 'react';
import plusIcon from '../../assets/images/plus-icon.png';
import styles from './styles';

export default class AddButton extends Component {
  render() {
    const {onPress} = this.props;
  
    return ( 
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Image source={plusIcon} resizeMode='contain' style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };
};
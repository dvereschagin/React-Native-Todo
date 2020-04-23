import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import plusIcon from '../../assets/images/plus-icon.png';

// Libs
import CheckBox from '@react-native-community/checkbox';

// Styles
import styles from './styles';

export default class ListItem extends Component {

  timeOut = null;

  state = {
    isCompleted: false
  };
  
  deleteItem = () => {
    const { data: { id }, handleDelete} = this.props;
    const { isCompleted } = this.state;
  
    this.setState({ isCompleted: !isCompleted }, () => {
      this.timeOut = setTimeout(() => {
        handleDelete(id)
      }, 1000);
    });
  };

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  };

  render() {
    const {data: { text, imageURL = null }, key} = this.props;

    return (
        <View style={styles.item} key={key}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={this.state.isCompleted}
              onValueChange={this.deleteItem}
            />
            <Text>{text}</Text>
          </View>

          {imageURL && (
            <Image
              source={{ uri: imageURL }}
              style={styles.image}resizeMode='cover'
            />
          )}
        </View>
    );
  };
};

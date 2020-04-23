import React, { Component } from 'react';
import { Text } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

export default class Title extends Component {
  render() {
    const { children, style } = this.props;
  
    return <Text style={[styles.text, style]}>{children}</Text>;
  };
};

Title.propTypes = {
  children: PropTypes.string
};
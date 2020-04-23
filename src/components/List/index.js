import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// Components
import ListItem from '../ListItem';

// Styles
import styles from './styles';

export default class List extends Component {
  handleDelete = (id) => {
    const { list, setList, setNewTodo} = this.props;
    setList(list.filter(item => item.id != id))
    setNewTodo({ id: 0, text: '', imageURL: null })
  };

  render() {
    const { list, setList } = this.props;

    return (
      <>
        {list && list.length > 0 ? list.map((data, key) => (
          <ListItem
            key={key}
            data={data}
            setList={setList}
            handleDelete={this.handleDelete}
          />
          )) : (
            <View style={styles.emptyView}>
              <Text>Your list is empty</Text>
            </View>
          )}
      </>
    );
  };
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired
}
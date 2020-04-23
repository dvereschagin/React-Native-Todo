/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

// Libs
import ImagePicker from 'react-native-image-picker';

// Components
import List from './components/List';
import Title from './components/Title';
import Popup from './components/Modal';
import Tabbar from './components/Tabbar';

// helpers
import PickerImage from './services/image-picker';

// Styles
import styles from './styles';

console.disableYellowBox = true

const App = () => {
  const [list, setList] = useState([]);

  const [todo, setNewTodo] = useState({ id: 0, text: '', imageURL: null })

  const [isModalVisible, setToggleModalVisibility] = useState(false)

  handleSelectImage = () => {
    PickerImage.pick((source) => {
      setNewTodo({ ...todo, imageURL: source})
    });
  };

  handleSubmit = () => {
    setNewTodo({...todo, id: todo.id + 1})
    setList([...list, {...todo, id: todo.id + 1}]);
    setToggleModalVisibility(false)
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Title style={styles.mainTitle}>React Native</Title>
            <List
              list={list}
               setList={setList}
              setNewTodo={setNewTodo} 
            />
        </View>
        <Tabbar handleAdd={() => setToggleModalVisibility(true)}/>
        <Popup 
          isVisible={isModalVisible}
          setNewTodo={setNewTodo}
          handleSelectImage={handleSelectImage}
          handleSubmit={handleSubmit}
          setToggleModalVisibility={setToggleModalVisibility}
          todo={todo}
        />
      </SafeAreaView>
    </>
  );
};

export default App;

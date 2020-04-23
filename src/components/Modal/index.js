import React, { Component } from 'react'; 
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

// Libs
import Modal from 'react-native-modal';

// Components
import Title from '../Title';

// Styles
import styles from './styles';

export default class Popup extends Component {

  submit = () => {
    const { todo } = this.props;
    if(!todo.text || todo.text.length > 255) {
        Alert.alert('Please enter valid format of text!')
        return;
    };

    handleSubmit();
  };

  reset = () => {
    const { setNewTodo, setToggleModalVisibility} = this.props;

    setNewTodo({ id: 0, text: '', imageURL: null })
    setToggleModalVisibility(false)
  };
    
  render() {
    const { 
      isVisible,
      setNewTodo,
      handleSelectImage,
      todo,
    } = this.props;

    return (
      <Modal isVisible={isVisible}>
        <View style={styles.header}>
  
          <View style={styles.row}>
            <View />
  
            <Title style={styles.title}>Add your TODO task</Title>

            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={this.reset}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

            <View>
                <Text>Enter your TODO text:</Text>
                <View style={{marginVertical: 8}}>
                <TextInput
                    autoFocus
                    style={{borderWidth: 0.5, borderColor: 'gray'}} 
                    onChangeText={text => setNewTodo({...todo, text})}
                    placeholder="Enter Task name"
                    ref
                />
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Button 
                title="Select image"
                onPress={handleSelectImage}
              />
            </View>

            <View style={styles.submitButton}>
              <Button title="Submit" onPress={this.submit} />
            </View>
            
        </View>
       </Modal>
    );
  }
};
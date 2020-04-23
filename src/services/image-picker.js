// Libs
import ImagePicker from 'react-native-image-picker';

options = {
    title: 'Select Images',
    storageOptions: {
      skipBackup: true,
      path: 'images',
  }
};

export default class Picker {

  static pick(callback) {

    ImagePicker.launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.debug('User cancelled image picker');
          return;
        }
        
        if (response.error) {
          console.debug('ImagePicker Error: ', response.error);
          return;
        }
    
        if (response.customButton) {
          console.debug('User tapped custom button: ', response.customButton);
          return;
        };

        const source = response.uri;

        callback(source);
      });
    }
  };
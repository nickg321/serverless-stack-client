import React, { useRef, useState } from 'react';
import { s3Upload } from '../libs/awsLib';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const UploadScreen = () => {
  const file = useRef(null);
  const [fileName, setFileName] = useState('');

  const validateForm = () => {
    return fileName.length > 0;
  };

  const handleFileChange = (event) => {
    file.current = event.target.files[0];
  };

  const handleSubmit = async (event) => {
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${
          config.MAX_ATTACHMENT_SIZE / 1000000
        } MB.`
      );
      return;
    }

    try {
      // call action here
    } catch (e) {}
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Upload Screen</Text>
      <Text style={styles.subtitleStyle}>File Name:</Text>
      <TextInput
        style={styles.textInputStyle}
        value={fileName}
        onChangeText={(text) => setFileName(text)}
      />
      <FlatList
        ListFooterComponent
        data={[{ title: 'title text', key: 'item1' }]}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={item.key}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  subtitleStyle: {
    fontSize: 18,
    marginBottom: 5,
  },
  textInputStyle: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonStyle: {
    marginTop: 25,
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadScreen;

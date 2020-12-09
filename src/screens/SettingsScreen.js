import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [storage, setStorage] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expy, setExpy] = useState('');
  const [CVC, setCVC] = useState('');

  const onSubmit = () => {
    let number = parseInt(storage, 10) * 0.05;

    setTimeout(() => {
      alert(`Payment of $${number} was Successful`);
    }, 1500);
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Settings Screen</Text>
      <Text style={styles.subtitleStyle}>Card Holder Name:</Text>
      <TextInput
        style={styles.textInputStyle}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.subtitleStyle}>Storage</Text>
      <TextInput
        style={styles.textInputStyle}
        value={storage}
        onChangeText={(text) => setStorage(text)}
      />
      <Text style={styles.subtitleStyle}>Card Number</Text>
      <TextInput
        style={styles.textInputStyle}
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <Text style={styles.subtitleStyle}>Expiration</Text>
      <TextInput
        style={styles.textInputStyle}
        value={expy}
        onChangeText={(text) => setExpy(text)}
      />
      <Text style={styles.subtitleStyle}>CVC</Text>
      <TextInput
        style={styles.textInputStyle}
        value={CVC}
        onChangeText={(text) => setCVC(text)}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={onSubmit}>
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>
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

export default SettingsScreen;

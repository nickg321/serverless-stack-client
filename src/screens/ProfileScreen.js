import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Upload')}
      >
        <Text style={{ color: 'white' }}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={{ color: 'white' }}>Settings</Text>
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

export default ProfileScreen;

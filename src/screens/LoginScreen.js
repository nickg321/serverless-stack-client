import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const LoginScreen = ({ login, isAuthenticated, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const onSubmit = () => {
    login(email, password);
  };

  const validateForm = () => {
    if (email.length > 0 && password.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  if (isAuthenticated) {
    // TODO: ADD IN REROUTING BEHAVIOR
    // Load profile
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Login</Text>
      <Text style={styles.subtitleStyle}>Email: </Text>
      <TextInput
        style={styles.textInputStyle}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.subtitleStyle}>Password: </Text>
      <TextInput
        style={styles.textInputStyle}
        value={password}
        onChangeText={(text) => setPassWord(text)}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => onSubmit()}
        disabled={!validateForm()}
      >
        <Text style={{ color: 'white' }}>Login</Text>
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

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginScreen);

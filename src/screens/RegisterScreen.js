import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { login, register, registerConfirm } from '../actions/auth';

const RegisterScreen = ({
  navigation,
  isAuthenticated,
  login,
  register,
  registerConfirm,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [onConfirm, setOnConfirm] = useState(false);

  const onFormSubmit = () => {
    register({ email, password });
    setOnConfirm(true);
  };

  const onConfirmSubmit = () => {
    registerConfirm({ email, name, confirmPassword, confirmCode });
  };

  const renderRegisterForm = () => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Register</Text>
        <Text style={styles.subtitleStyle}>Name:</Text>
        <TextInput
          style={styles.textInputStyle}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.subtitleStyle}>Email:</Text>
        <TextInput
          style={styles.textInputStyle}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.subtitleStyle}>Password:</Text>
        <TextInput
          style={styles.textInputStyle}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.subtitleStyle}>Confirm Password</Text>
        <TextInput
          style={styles.textInputStyle}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onFormSubmit()}
        >
          <Text style={{ color: 'white' }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderConfirmationForm = () => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>
          Please check your email for the code
        </Text>
        <Text style={styles.subtitleStyle}>Confirmation Code:</Text>
        <TextInput
          style={styles.textInputStyle}
          value={confirmCode}
          onChangeText={(text) => setConfirmCode(text)}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onConfirmSubmit()}
        >
          <Text style={{ color: 'white' }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (isAuthenticated) {
    // TODO: ADD IN REROUTING BEHAVIOR
    // Load profile
    navigation.navigate('Profile');
  }

  return !onConfirm ? renderRegisterForm() : renderConfirmationForm();
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

RegisterScreen.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register, registerConfirm })(
  RegisterScreen
);

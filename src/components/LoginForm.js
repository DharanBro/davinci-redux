import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert, AsyncStorage, ActivityIndicator } from 'react-native';
import validate from 'validate.js'
import { LinearGradient } from 'expo';

import { styles } from '../styles'
import constraints from '../utils/constrains'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'giridharanr@visualbi.com',
      password: 'fJABx3F2fcrV'
    }
    this.navigationOptions = {
      title: 'Login',
    }
  }

  _loginToZoho = () => {
    var errorData = validate(this.state, constraints.login);
    if (errorData) {
      if (errorData.email) {
        Alert.alert(errorData.email[0]);
        this.emailInput.focus();
      }
      else if (errorData.password) {
        Alert.alert(errorData.password[0]);
        this.passwordInput.focus()
      }
      return;
    }
    this.props.performLogin(this.state.email, this.state.password);
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          style={{ width: '100%' }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
          <LinearGradient
            style={{ padding: 20 }}
            colors={['#7ac4e8', '#1287d0']}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.stretch}
                resizeMode={Image.resizeMode.contain}
                source={require('../images/360logo.png')}
              />
              {this.props.isLoginFetching || this.props.isLoggedIn ? <ActivityIndicator size="large" color="#fff" /> : null}
            </View>
            {!this.props.isLoginFetching && !this.props.isLoggedIn ? <View style={styles.formContainer}>
              <Text style={styles.loginInfoText}>
                Login with Zoho credentials
              </Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={input => (this.emailInput = input)}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="Email"
                placeholderTextColor="#eee"
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType="go"
                onChangeText={password => this.setState({ password })}
                ref={input => (this.passwordInput = input)}
                placeholder="Password"
                placeholderTextColor="#eee"
                secureTextEntry
                value={this.state.password}
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._loginToZoho}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View> : <View style={styles.formContainer}></View>}
          </LinearGradient>
        </KeyboardAvoidingView>

      </View>
    );
  }


}



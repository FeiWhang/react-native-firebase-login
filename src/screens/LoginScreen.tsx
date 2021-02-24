import React, { memo, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import { logIn } from '../firebase';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    logIn(email.value, password.value, navigation);
    setEmail({ value: '', error: ''});
    setPassword({ value: '', error: ''});
  };

  const _onRegisterPressed = () => {
    navigation.navigate('Register');
    setEmail({ value: '', error: ''});
    setPassword({ value: '', error: ''});
  }

  return (
    <Background>
      <Logo />

      <Header>Firebase Login !</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <Text>Not a member?</Text>

      <Button mode="outlined" onPress={_onRegisterPressed}>
        Register
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({

});

export default memo(LoginScreen);

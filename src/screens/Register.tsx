import React, { memo, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import Background from '../components/Background';
import { register } from '../firebase';

type Props = {
  navigation: Navigation;
};

const Register = ({ navigation }: Props) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
  
    const _onRegisterPressed = () => {
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);
  
      if (emailError || passwordError) {
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        return;
      }
      
      register(email.value, password.value, navigation);
    };
  
    return (
      <Background>
  
        <Header>Firebase Sign Up !</Header>

    
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

    
  
        <Button mode="contained" onPress={_onRegisterPressed}>
          Sign Up
        </Button>
  
  
        <Button mode="outlined" onPress={() => { navigation.navigate('LoginScreen');}}>
          back to login
        </Button>
      </Background>
    );
  };



export default memo(Register);

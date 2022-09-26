import React, {
  useState
}                         from 'react';
import {
  Text,
  TouchableOpacity, 
  TextInput, 
  View
}                         from 'react-native';
import {useDispatch}      from 'react-redux';
import AsyncStorage       from '@react-native-async-storage/async-storage';

import { createAccounts } from '../../../store/actions/Auth';
import ROUTES             from '../../../constants/Routs';

import styles             from './styles';

const MOCKED_TEXT = {
  login : 'Login',
  registration : 'Registration'
}

function RegistryScreen({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRegistration() {
     
     const validEmailAddress = await dispatch(createAccounts({ 
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
       }));

       if (validEmailAddress.token ) {
            await AsyncStorage.setItem('token', validEmailAddress.token)
           navigation.replace(ROUTES.MAIN_STACK);
       } else{
        alert(validEmailAddress.error.code)
       }
  }

  function handleOpenLoginScreen() {
     navigation.navigate(ROUTES.LOGIN_SCREEN)
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.headerTitle}>{MOCKED_TEXT.registration}</Text>
      <TextInput
        style        = {styles.inputContainer}
        onChangeText = {setEmail}
        value        = {email}
        placeholder  = "email"
        keyboardType = "default"
      />
      <TextInput
        style        = {styles.inputContainer}
        value        = {name}
        placeholder  = "name"
        onChangeText = {setName}
      />
      <TextInput
        style         = {styles.inputContainer}
        value         = {password}
        placeholder   = "Password"
        onChangeText  = {setPassword}
      />
      <TextInput
        style         = {styles.inputContainer}
        value         = {confirmPassword}
        placeholder   = "confirmPassword"
        onChangeText  = {setConfirmPassword}
      />
      <TouchableOpacity
         onPress = {handleRegistration} 
         style   = {styles.button}>
        <Text style = {styles.buttonTitle}>{MOCKED_TEXT.registration}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = {handleOpenLoginScreen}
        style   = {styles.button}>
        <Text style = {styles.buttonTitle}>{MOCKED_TEXT.login}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(RegistryScreen);
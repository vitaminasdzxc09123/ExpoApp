import React, {
  useState
}                        from 'react';
import {
    Text, 
    View, 
    TouchableOpacity, 
    TextInput
  }                      from 'react-native';
import styles            from './styles';

import {useDispatch}     from 'react-redux';

import { loginAccounts } from '../../../store/actions/Auth';

import ROUTES            from '../../../constants/Routs';
import AsyncStorage      from '@react-native-async-storage/async-storage';

const MOCKED_TEXT = {
  login : 'Login',
  registration : 'Registration'
}
function LoginScreen({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleAuthorization() {
      const validEmailAddress = await dispatch(loginAccounts({ 
        email: email,
        password: password
       }));

       if(validEmailAddress.token){
         await AsyncStorage.setItem('token', validEmailAddress.token)
         navigation.replace(ROUTES.MAIN_STACK);
       } else {
        alert(validEmailAddress.error.code)
       }
  }

   function handleOpenRegistration() {
       navigation.navigate(ROUTES.REGISTRATION_SCREEN)
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.headerTitle}>{MOCKED_TEXT.login}</Text>
      <TextInput
        style        = {styles.inputContainer}
        onChangeText = {setEmail}
        value        = {email}
        placeholder  = "Email"
      />
      <TextInput
        style        = {styles.inputContainer}
        value        = {password}
        placeholder  = "Password"
        secureTextEntry
        onChangeText = {setPassword}
      />
      <TouchableOpacity 
         onPress = {handleAuthorization}
         style   = {styles.button}>
        <Text style = {styles.buttonTitle}>{MOCKED_TEXT.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = {handleOpenRegistration}
        style   = {styles.button}>
        <Text style = {styles.buttonTitle}>{MOCKED_TEXT.registration}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(LoginScreen);
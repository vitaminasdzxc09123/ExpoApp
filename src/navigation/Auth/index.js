import React                        from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistryScreen               from '../../screen/auth/RegistryScreen';
import LoginScreen                  from '../../screen/auth/LoginScreen';

import ROUTES                       from '../../constants/Routs';
import MainStack                    from '../Main';

const Stack = createNativeStackNavigator();

function AuthStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
          name      = {ROUTES.LOGIN_SCREEN}
          component = {LoginScreen} />
      <Stack.Screen 
         name      = {ROUTES.REGISTRATION_SCREEN}
         component = {RegistryScreen} />
      <Stack.Screen 
         name      = {ROUTES.MAIN_STACK}
         component = {MainStack} />
    </Stack.Navigator>
  );
}

export default React.memo(AuthStack);
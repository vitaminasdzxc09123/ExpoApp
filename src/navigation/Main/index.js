import React                        from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen                   from '../../screen/HomeScreen';

import ROUTES                       from '../../constants/Routs';
import AuthStack                    from '../Auth';

const Stack = createNativeStackNavigator();

function MainStack() {

  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
      <Stack.Screen 
          name      = {ROUTES.HOME_SCREEN}
          component = {HomeScreen} />
      <Stack.Screen 
          name      = {ROUTES.AUTH_STACK}
          component = {AuthStack} />
   
      </Stack.Navigator>
  );
}

export default React.memo(MainStack);
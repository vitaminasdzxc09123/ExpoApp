import React, { 
    useEffect, 
    useMemo,
    useState
}                                     from 'react';

import {NavigationContainer}          from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ROUTES                         from '../constants/Routs';
import MainStack                      from './Main'
import AuthStack                      from './Auth'
import AsyncStorage                   from '@react-native-async-storage/async-storage';

const StackNavigation = createNativeStackNavigator();

 function Navigation() {
    const [token, setToken] = useState('')
        
    useEffect(() => {
           async function updateToken () {
           const userToken = await AsyncStorage.getItem('token')
            setToken(userToken)
         }
        updateToken()
        
     },[token])

  const stack = useMemo(() => {
        if (token) {
    return (
          <StackNavigation.Screen
                    name      = {ROUTES.MAIN_STACK}
                    component = {MainStack}
                />
            );
        }
    return (
         <StackNavigation.Screen
                    name      = {ROUTES.AUTH_STACK}
                    component = {AuthStack}
                />
            );
    }, [token]);

    return (
        <NavigationContainer>
        <StackNavigation.Navigator
            screenOptions={{
            headerShown: false,
          }}>
                {stack}
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export { Navigation };

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator  headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Index
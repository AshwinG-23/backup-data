import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import SignIn from './src/SignIn'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigatorScreenS from './src/studentScreens/NavigatorScreen';
import NavigatorScreenT from './src/teacherScreens/NavigatorScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn'>
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='StudentHome' component={NavigatorScreenS} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name='TeacherHome' component={NavigatorScreenT} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
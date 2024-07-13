import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from './screens/SigninScreen';
import HomePage from './screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer documentTitle={'hidden'}>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="EmailAuth" component={SigninScreen} options={{ headerShown:false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

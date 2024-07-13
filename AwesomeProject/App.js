import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import profileScreen from './screens/profileScreen'
import homeScreen from './screens/homeScreen'


export default function App(){
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Profile" component={profileScreen} />
          <Drawer.Screen name="Home" component={homeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
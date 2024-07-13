import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AttendenceScreen from './AttendenceScreen';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import ParentInfo from './ParentInfoScreen';
import Exam from './Exam';

const CustomDrawerContent = (props) => {
  const Navigation = useNavigation();
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ height: 150, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Custom Drawer Header</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => {Navigation.navigate('SignIn')}}
        />
      </DrawerContentScrollView>
    );
  };

export default function NavigatorScreen() {
  
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}  screenOptions={{headerShown: true,header: () => <CustomHeader studentName="John Doe" studentClass="Class 10A" />,}}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle:null}} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerTitle:null}}/>
            <Drawer.Screen name="Parent Info" component={ParentInfo} options={{headerTitle:null}}/>
            <Drawer.Screen name="Attendence" component={AttendenceScreen} options={{headerTitle:null}}/>
            <Drawer.Screen name="Exam" component={Exam} options={{headerTitle:null}}/>
        </Drawer.Navigator>
    )
}
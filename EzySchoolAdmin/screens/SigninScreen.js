import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth'
import { createStackNavigator } from '@react-navigation/stack';
export default function App({navigation}){
    const Stack = createStackNavigator();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [error, setError] = useState('');
    const handlesignIn = async () =>{
        try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('HomePage');
          } catch (error) {
            setError(error.message);
          }
    }
    return(
        <View style = {styles.mainContainer}>
            <Text style={styles.header}>Login with Email and Password</Text>
            <TextInput style={styles.inputLabel}
            placeholder='Email'
            placeholderTextColor={'black'}
            value={email}
            onChangeText={newText => setEmail(newText)}>

            </TextInput>
            <TextInput style={styles.inputLabel}
            placeholder='Password'
            placeholderTextColor={'black'}
            value={password}
            onChangeText={newText => setPassword(newText)}>

            </TextInput>
            <Button title='Sign In' onPress={handlesignIn}/>
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    header:{
        fontSize:30,
        color:'black',
        fontWeight:'bold',
        marginBottom:30
    },
    inputLabel:{
        backgroundColor:'lightgrey',
        paddingHorizontal:30,
        paddingVertical:10,
        marginBottom:20,
        width:'60%',
        borderRadius:10
    },
})
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import splash from '../assets/Splash.png';
import { useNavigation } from '@react-navigation/native';



export default function SignIn() {
  const Navigation = useNavigation();
  return (
    <View className="">
      <View className="h-1/2 bg-white ">
        <View className="flex-1">
          <Image
            source={splash}
            className="w-full flex-1 rounded-bl-3xl"
            
          />
          <View className="absolute bottom-0 w-full items-center z-10 mb-10">
            <Text className="text-white text-5xl">Sign In</Text>
          </View>
        </View>
      </View>

      <View style={{backgroundColor:'#473f97'}} className='h-1/2'>
        <View className=" bg-white p-7 rounded-tr-3xl flex-1">
          <View className="">
            <Text className="text-black text-2xl">Phone Number</Text>
            <TextInput
              className="border border-gray-300 text-black text-xl rounded-md px-3 py-2 mt-4"
              placeholder="9960XXXXXX"
              placeholderTextColor="gray"
              
            />

            <Text className="text-black text-2xl mt-9">OTP</Text>
            <TextInput
              className="border border-gray-300 text-black text-xl rounded-md px-3 py-2 mt-4"
              placeholder="* * * *"
              placeholderTextColor="gray"
            />
          </View>
          <View className='mt-12'>
            <TouchableOpacity className="bg-pink-500 py-3 rounded-2xl" onPress={()=>Navigation.navigate("TeacherHome")}>
              <Text className="text-white text-center text-lg">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

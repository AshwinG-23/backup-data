import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import splash from '../../assets/Splash.png'
import { useNavigation } from '@react-navigation/native';



export default function ParentInfo() {
  const Navigation = useNavigation();
  return (
    <View className="">
      <View className="h-1/3 bg-white ">
        <View className="flex-1">
          <Image
            source={splash}
            className="w-full flex-1 rounded-bl-3xl"
            
          />
          <View className="absolute bottom-0 w-full items-center z-10 mb-1">
            <Text className="text-white text-5xl">Parent Info</Text>
          </View>
        </View>
      </View>

      <View style={{backgroundColor:'#473f97'}} className='h-2/3'>
        <View className=" bg-white pt-5 pl-3 rounded-tr-3xl flex-1">
        <View className="h-2/3 text-black flex flex-col">
        <View className="p-7 rounded-tr-3xl flex-1">
          <View className="mb-4 flex flex-col">
          <View className='flex flex-row'>
            <Text className="text-xl font-bold text-black flex-1">Father Name</Text>
              <Text className="text-lg text-customPurple ml-24 flex-1">Father</Text>
          </View>
            <View className="border-b-2 border-gray-300 mt-3"/>
          </View>

          <View className="mb-4">
          <View className='flex flex-row'>
            <Text className="text-xl font-bold text-black flex-1">Mother Name</Text>
              <Text className="text-lg text-customPurple ml-24 flex-1 ">Mother</Text>
          </View>
            <View className="border-b-2 border-gray-300 mt-3"/>
          </View>

          <View className="mb-4">
          <View className='flex flex-row'>
            <Text className="text-xl font-bold text-black flex-1">Mobile Number</Text>
              <Text className="text-lg text-customPurple ml-24 flex-1">9960XXXXXX</Text>
          </View>
            <View className="border-b-2 border-gray-300 mt-3"/>
          </View>

          <View className="mb-4">
          <View className='flex flex-row'>
            <Text className="text-xl font-bold text-black flex-1">Parent Email</Text>
              <Text className="text-lg text-customPurple ml-24 flex-1">abc@gmail.com</Text>
          </View>
            <View className="border-b-2 border-gray-300 mt-3"/>
          </View>

          <View className="mb-4">
          <View className='flex flex-row'>
            <Text className="text-xl font-bold text-black flex-1">Address</Text>
              <Text className="text-lg text-customPurple ml-24 flex-1">Maharashtra</Text>
          </View>
            <View className="border-b-2 border-gray-300 mt-3"/>
          </View>

          <View className="mb-4">
          <View className='flex flex-row'>
            <Text className="text-xl font-bold text-black flex-1">Profession</Text>
              <Text className="text-lg text-customPurple ml-24 flex-1 ">Job</Text>
          </View>
            <View className="border-b-2 border-gray-300 mt-3"/>
          </View>
        </View>
      </View>
        </View>
      </View>
    </View>
  );
}

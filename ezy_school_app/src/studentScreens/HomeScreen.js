import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Homework from '../components/HomeWork';

export default function HomeScreen() {
  return (
      <View className="flex-1">
        <Text className='text-customPurple text-3xl pt-8 pl-3 px-7 font-bold'>Homework</Text>
        <View className="bg-gray-100 flex-auto">
          <Homework/>
        </View>
      </View>
  );
}

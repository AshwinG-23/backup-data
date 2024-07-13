import React from 'react';
import { View, Text } from 'react-native';
import Classes from '../components/Classes';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1">
      <Text className="text-customPurple text-4xl m-6">Classes</Text>
      <View className="bg-gray-100 flex-auto">
        <Classes navigation={navigation} />
      </View>
    </View>
  );
}

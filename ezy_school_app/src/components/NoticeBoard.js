import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function NoticeBoard() {
  const notices = [
    {
      heading: 'Notice 1',
      description: 'This is the description for notice 1. It includes important information for the users.',
    },
    {
      heading: 'Notice 2',
      description: 'This is the description for notice 2. It includes important information for the users.',
    },
    {
      heading: 'Notice 3',
      description: 'This is the description for notice 3. It includes important information for the users.',
    },
  ];

  return (
    <View className=" h-80 w-full">
      <ScrollView className="flex-1 bg-gray-100">
        {notices.map((notice, index) => (
        <View key={index} className="p-4 bg-white rounded-lg shadow-md m-4">
          <Text className="text-customPurple text-2xl font-bold mb-2">{notice.heading}</Text>
          <Text className="text-gray-700 text-base">{notice.description}</Text>
        </View>
        ))}
      </ScrollView>
    </View>
  );
}

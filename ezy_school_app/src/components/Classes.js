import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function Classes({ navigation }) {
  const initialClasses = [
    {
      id: '1',
      heading: 'Class 1',
      description: 'Complete exercises 1 to 10 on page 42 of the textbook.',
    },
    {
      id: '2',
      heading: 'Class 2',
      description: 'Prepare a model of the solar system using recycled materials.',
    },
    {
      id: '3',
      heading: 'Class 3',
      description: 'Write an essay on the causes and effects of World War II.',
    },
    {
      id: '4',
      heading: 'Class 4',
      description: 'Create a painting of your favorite landscape using watercolors.',
    },
    {
      id: '5',
      heading: 'Class 5',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
    },
    {
      id: '6',
      heading: 'Class 6',
      description: 'Create a painting of your favorite landscape using watercolors.',
    },
    {
      id: '7',
      heading: 'Class 7',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
    },
    {
      id: '8',
      heading: 'Class 8',
      description: 'Create a painting of your favorite landscape using watercolors.',
    },
    {
      id: '9',
      heading: 'Class 9',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
    },
    {
      id: '10',
      heading: 'Class 10',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
    }
  ];

  return (
    <ScrollView>
      <View className="p-4 bg-gray-100">
        {initialClasses.map((classItem) => (
          <TouchableOpacity key={classItem.id} className="p-4 flex-row bg-red-50 rounded-lg shadow-md mb-4 items-center" onPress={() => navigation.navigate('TakeAttendance')}>
            <View className="flex-1">
              <Text className="text-black text-lg font-semibold">{classItem.heading}</Text>
              <Text className="text-gray-700 text-base">{classItem.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

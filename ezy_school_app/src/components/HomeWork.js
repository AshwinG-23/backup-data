import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function HomeworkScreen() {
  const initialHomeworks = [
    {
      id: '1',
      heading: 'Math Homework',
      description: 'Complete exercises 1 to 10 on page 42 of the textbook.',
      done: false,
    },
    {
      id: '2',
      heading: 'Science Project',
      description: 'Prepare a model of the solar system using recycled materials.',
      done: false,
    },
    {
      id: '3',
      heading: 'History Assignment',
      description: 'Write an essay on the causes and effects of World War II.',
      done: false,
    },
    {
      id: '4',
      heading: 'Art Project',
      description: 'Create a painting of your favorite landscape using watercolors.',
      done: false,
    },
    {
      id: '5',
      heading: 'Literature Review',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
      done: false,
    },
    {
      id: '6',
      heading: 'Art Project',
      description: 'Create a painting of your favorite landscape using watercolors.',
      done: false,
    },
    {
      id: '7',
      heading: 'Literature Review',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
      done: false,
    },
    {
      id: '8',
      heading: 'Art Project',
      description: 'Create a painting of your favorite landscape using watercolors.',
      done: false,
    },
    {
      id: '9',
      heading: 'Literature Review',
      description: 'Read chapters 3 and 4 of the assigned book and write a summary.',
      done: false,
    }
  ];

  const [homeworks, setHomeworks] = useState(initialHomeworks);

  const toggleCheckbox = (id) => {
    const updatedHomeworks = homeworks.map((homework) => {
      if (homework.id === id) {
        return { ...homework, done: !homework.done };
      }
      return homework;
    });
    setHomeworks(updatedHomeworks);
  };

  return (
    <ScrollView className="flex-1">
      <View className="p-4 bg-gray-100">
        {homeworks.map((homework) => (
          <View key={homework.id} className="p-4 flex-row bg-red-100 rounded-lg shadow-md mb-4 items-center">
            <View className="h-10 w-10 items-center justify-center">
              <CheckBox
                boxType="circle"
                value={homework.done}
                onValueChange={() => toggleCheckbox(homework.id)}
                tintColors={{ true: '#473f97', false: 'black' }}
                
              />
            </View>
            <View className="flex-1 ml-4">
              <Text className=" text-black text-lg font-semibold">{homework.heading}</Text>
              <Text className="text-gray-700 text-base">{homework.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

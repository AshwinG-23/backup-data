import { View, Text, ScrollView } from 'react-native';
import React from 'react';

export default function Students({ renderItem }) {
  const initialStudents = [
    { id: 1, rollno: 101, name: 'Onkar' },
    { id: 2, rollno: 102, name: 'Onkar' },
    { id: 3, rollno: 103, name: 'Onkar' },
    { id: 4, rollno: 104, name: 'Onkar' },
    { id: 5, rollno: 105, name: 'Onkar' },
    { id: 6, rollno: 106, name: 'Onkar' },
    { id: 7, rollno: 107, name: 'Onkar' },
    { id: 8, rollno: 108, name: 'Onkar' },
  ];

  return (
    <ScrollView className='flex-1'>
      <View className="p-4 bg-gray-100">
        {initialStudents.map((student) => (
          <View key={student.id} className="p-4 flex-row bg-red-50 rounded-lg shadow-md mb-4 items-center">
            {renderItem ? renderItem(student) : (
              <View className="flex-1">
                <Text className="text-black text-lg font-semibold">Name: {student.name}</Text>
                <Text className="text-gray-700 text-base">Roll No: {student.rollno}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

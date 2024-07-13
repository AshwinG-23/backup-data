import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function TakeAttendance({ navigation }) {
  const initialAttendance = [
    { id: 1, rollno: 101, name: 'Onkar', present: true },
    { id: 2, rollno: 102, name: 'Onkar', present: true },
    { id: 3, rollno: 103, name: 'Onkar', present: true },
    { id: 4, rollno: 104, name: 'Onkar', present: true },
    { id: 5, rollno: 105, name: 'Onkar', present: true },
    { id: 6, rollno: 106, name: 'Onkar', present: true },
    { id: 7, rollno: 107, name: 'Onkar', present: true },
    { id: 8, rollno: 108, name: 'Onkar', present: true },
  ];

  const [students, setStudents] = useState(initialAttendance);

  const handleAttendanceToggle = (id) => {
    const updatedStudents = students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          present: !student.present,
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Text className="text-customPurple text-4xl m-6">Take Attendance</Text>
      <View className="flex-row justify-between mb-2">
        <Text className="text-black text-lg font-semibold ml-8">Students</Text>
        <Text className="text-black text-lg font-semibold ml-16">Present</Text>
        <Text className="text-black text-lg font-semibold mr-8">Absent</Text>
      </View>
      <ScrollView className="flex-1">
        {students.map(student => (
          <View key={student.id} className="p-4 bg-white rounded-lg shadow-md mb-4 flex-row items-center">
            <View className="flex-1">
              <Text className="text-black text-lg font-semibold">Name: {student.name}</Text>
              <Text className="text-gray-700 text-base">Roll No: {student.rollno}</Text>
            </View>
            <View className="flex-row items-center">
              <CheckBox
                value={student.present}
                onValueChange={() => handleAttendanceToggle(student.id)}
                className="checkbox"
                tintColors={{ true: 'green', false: 'gray' }} 
              />
              <Text className="ml-2">Present</Text>
              <CheckBox
                value={!student.present}
                onValueChange={() => handleAttendanceToggle(student.id)}
                className="checkbox"
                tintColors={{ true: 'red', false: 'gray' }} 
              />
              <Text className="ml-2">Absent</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

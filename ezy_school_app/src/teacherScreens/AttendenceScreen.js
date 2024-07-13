import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const TakeAttendance = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <View className="flex-1">
      <Text className="text-customPurple text-4xl m-6">Attendance Record</Text>
      <View className="bg-gray-100 flex-auto">
        <TouchableOpacity onPress={toggleCalendar} className="bg-blue-500 p-4 rounded-lg m-4">
          <Text className="text-white font-semibold">Select Month</Text>
        </TouchableOpacity>
        {showCalendar && (
          <View className="p-4 bg-white rounded-lg shadow-md mb-4">
            <CalendarPicker
              onDateChange={handleDateSelect}
              selectedStartDate={selectedDate}
              selectedDate={selectedDate}
            />
          </View>
        )}
        <ScrollView className="flex-1 mt-8">
          <View className="p-4 bg-white rounded-lg shadow-md mb-4 flex-row items-center">
            <View className="flex-1">
              <Text className="text-black text-lg font-semibold">Name: John Doe</Text>
              <Text className="text-gray-700 text-base">Roll No: 101</Text>
            </View>
            <View className="flex-row items-center">
              <View className="bg-green-200 p-2 rounded-lg mr-4">
                <Text className="text-green-600 text-xl">4</Text>
              </View>
              <View className="bg-red-200 p-2 rounded-lg">
                <Text className="text-red-600 text-xl">2</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TakeAttendance;

import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';

const AttendanceScreen = () => {
  const [calendarVisible, setCalendarVisible] = useState(false);

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-customPurple text-3xl mt-7 ml-5 font-bold">Attendance</Text>
      <TouchableOpacity className="mt-14 ml-2 mr-2 border border-gray-300 rounded-2xl shadow-md bg-white p-4" onPress={() => setCalendarVisible(true)}>
        <View>
          <Text className="text-black font-semibold text-lg">Month name</Text>
          <View className="flex-row justify-between">
            <View className="justify-center items-center rounded-lg flex-1 m-1 p-2 bg-green-200">
              <Text className="text-black">Present</Text>
              <Text>10</Text>
            </View>
            <View className="justify-center items-center rounded-lg flex-1 w-1/3 m-1 p-2 bg-red-200">
              <Text className="text-black">Absent</Text>
            </View>
            <View className="justify-center items-center rounded-lg flex-1 w-1/3 m-1 p-2 bg-blue-200">
              <Text className="text-black">Total</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={calendarVisible}
        onRequestClose={() => setCalendarVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setCalendarVisible(false)}>
          <View className="flex-1 justify-center items-center bg-[#0000005a]">
            <TouchableWithoutFeedback>
              <View className="w-4/5 p-5 bg-white rounded-lg">
                <Calendar />
                <TouchableOpacity
                  onPress={() => setCalendarVisible(false)}
                  className="mt-4 bg-[#473f97] p-2 rounded">
                  <Text className="text-white text-center">Close</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default AttendanceScreen;

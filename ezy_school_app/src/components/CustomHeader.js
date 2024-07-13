import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NoticeBoard from './NoticeBoard';

const CustomHeader = ({ studentName, studentClass, studentImage }) => {
  const navigation = useNavigation();
  const [noticeBoardVisible, setNoticeBoardVisible] = useState(false);
  const defaultStudentImage = require('./../../assets/Default_pfp.jpg');
  const drawerOpener = require('./../../assets/drawerOpener.png');
  const noticeBoardImg = require('./../../assets/noticeBoard.png');

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View className="flex-row items-center justify-between px-4 py-2 bg-[#473f97]">
      <TouchableOpacity onPress={openDrawer} className="p-2">
        <Image source={drawerOpener} className="w-10 h-10 bg-transparent" />
      </TouchableOpacity>
      <TouchableOpacity className="ml-2" onPress={() => setNoticeBoardVisible(true)}>
        <Image source={noticeBoardImg} className="w-10 h-10 ml-4" />
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <Text className="text-white text-lg font-bold">{studentName}</Text>
        <Text className="text-white">{studentClass}</Text>
      </View>
      <View className="ml-2">
        <Image source={studentImage || defaultStudentImage} className="w-10 h-10 rounded-full" />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={noticeBoardVisible}
        onRequestClose={() => setNoticeBoardVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-[#0000008f]">
          <View className="w-11/12 p-6 bg-white rounded-lg items-center">
            <Text className="text-2xl font-bold text-customPurple mb-4">Notice Board</Text>
            <NoticeBoard />
            <TouchableOpacity
              onPress={() => setNoticeBoardVisible(false)}
              className="mt-4 bg-[#473f97] p-2 rounded"
            >
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomHeader;

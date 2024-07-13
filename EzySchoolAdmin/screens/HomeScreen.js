import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View, TextInput, ScrollView, StyleSheet, Alert, Modal, TouchableWithoutFeedback } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [classList, setClassList] = useState([]);
  const [addStudentPromptVisibility, setAddStudentPromptVisibility] = useState(false);
  const [addClassPromptVisibility, setAddClassPromptVisibility] = useState(false);
  const [lastClickedClass, setLastClickedClass] = useState('');

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('classes')
      .onSnapshot(querySnapshot => {
        const classes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setClassList(classes);
      }, error => {
        console.error("Error fetching classes: ", error);
      });

    // Clean up listener on component unmount
    return () => unsubscribe();
  }, []);

  const addStudentToDatabase = () => {
    firestore()
      .collection('Student')
      .add({
        name: name,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        Alert.alert('New Student Added Successfully');
        setAddStudentPromptVisibility(false);
      })
      .catch(error => {
        console.error("Error adding student: ", error);
        Alert.alert('Error', 'Failed to add new student');
      });
  };

  const addClassToDatabase = () => {
    firestore()
      .collection('classes')
      .doc(className)
      .set({
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        Alert.alert('New Class Added Successfully');
        setAddClassPromptVisibility(false);
        setClassName('');
      })
      .catch(error => {
        console.error("Error adding Class: ", error);
        Alert.alert('Error', 'Failed to add new Class');
      });
  };

  const handleClassClick = (classId) => {
    setLastClickedClass(classId);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
          <View style={styles.classListContainer}>
            {classList.map(classItem => (
              <TouchableOpacity key={classItem.id} style={styles.classCard} onPress={() => handleClassClick(classItem.id)}>
                <Text>{classItem.id}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.lastClickedClassContainer}>
          <Text>Last Clicked Class: {lastClickedClass}</Text>
        </View>
        <TouchableOpacity onPress={() => { setAddClassPromptVisibility(true) }}>
          <Text>Add Class</Text>
        </TouchableOpacity>
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={() => { setAddStudentPromptVisibility(true) }}>
            <Text>Add Student</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setAddStudentPromptVisibility(true) }}>
            <Text>Add Teacher</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={addClassPromptVisibility}
          onRequestClose={() => {
            setAddClassPromptVisibility(false);
          }}>
          <TouchableWithoutFeedback onPress={() => setAddClassPromptVisibility(false)}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.promptContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Class</Text>
              <TextInput
                style={styles.inputLabel}
                placeholder='Class name'
                placeholderTextColor='black'
                value={className}
                onChangeText={newText => setClassName(newText)}
              />
              <Button title="Add" onPress={addClassToDatabase} />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={addStudentPromptVisibility}
          onRequestClose={() => {
            setAddStudentPromptVisibility(false);
          }}>
          <TouchableWithoutFeedback onPress={() => setAddStudentPromptVisibility(false)}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.promptContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Student</Text>
              <TextInput
                style={styles.inputLabel}
                placeholder='Name'
                placeholderTextColor='black'
                value={name}
                onChangeText={newText => setName(newText)}
              />
              <TextInput
                style={styles.inputLabel}
                placeholder='Phone Number'
                placeholderTextColor='black'
                value={phoneNumber}
                onChangeText={newText => setPhoneNumber(newText)}
              />
              <Button title="Add" onPress={addStudentToDatabase} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  promptContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classCard: {
    backgroundColor: "lightblue",
    margin: 5,
    padding: 20,
    borderRadius: 15,
  },
  classListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastClickedClassContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

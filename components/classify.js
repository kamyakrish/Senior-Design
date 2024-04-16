import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Header from './header'; // Import Header component
import RNPickerSelect from 'react-native-picker-select';
import Axios from 'axios';
import styles from './styles';

const Classify = () => {
  const navigation = useNavigation(); // Get the navigation object
  const [materials, setMaterials] = useState([
    { id: 1, name: 'PET Cristal', weight: 0, color: '#ff6347' },
    { id: 2, name: 'PET Verde', weight: 0, color: '#ffd700' },
    { id: 3, name: 'PET Bandejas', weight: 0, color: '#20b2aa' },
    { id: 4, name: 'Polietileno Botella', weight: 0, color: '#00bfff' },
    { id: 5, name: 'Nylon Transparente', weight: 0, color: '#ff4500' },
    { id: 6, name: 'Nylon Color', weight: 0, color: '#9932cc' },
    { id: 7, name: 'Papel Blanco', weight: 0, color: '#00fa9a' },
    { id: 8, name: 'Revista/Diario', weight: 0, color: '#9370db' },
    { id: 9, name: 'Cartón Corrugado', weight: 0, color: '#9370db' },
    { id: 10, name: 'Aluminio', weight: 0, color: '#9370db' },
    { id: 11, name: 'Chatarra', weight: 0, color: '#9370db' },
    { id: 12, name: 'Electrónicos', weight: 0, color: '#9370db' },
    { id: 13, name: 'Vidrio', weight: 0, color: '#9370db' },
    { id: 14, name: 'Tetrabrik', weight: 0, color: '#9370db' },
    { id: 15, name: 'Poliestireno Expandido', weight: 0, color: '#9370db' },
    { id: 16, name: 'PP (5)', weight: 0, color: '#9370db' },
    { id: 17, name: 'Poliestireno PS (6)', weight: 0, color: '#9370db' },
    { id: 18, name: 'Descarte', weight: 0, color: '#9370db' },
  ]);
  const [totalWeight, setTotalWeight] = useState(0);
  const [comment, setComment] = useState('');
  const [editingMaterialId, setEditingMaterialId] = useState(null); // State variable to track which material is being edited

  const addWeight = (materialId, weight) => {
    const newMaterials = materials.map((material) => {
      if (material.id === materialId) {
        const newWeight = material.weight + weight;
        setTotalWeight((prevTotal) => prevTotal + weight);
        return { ...material, weight: newWeight };
      }
      return material;
    });
    setMaterials(newMaterials);
  };

  const handleWeightEdit = (materialId) => {
    // Set the editingMaterialId state to the materialId to indicate which material is being edited
    setEditingMaterialId(materialId);
  };

  const submitMaterials = async () => {
    // Your submitMaterials function logic remains the same
  };

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.topRectangle}></View>
        <Image source={require('./logo.png')} style={[styles.logo, { width: '25%', alignSelf: 'flex-start' }]} />
        <View style={styles.additionalRectangle}></View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Classification</Text>
        </View>

        <View style={styles.pickersContainer}>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'client', value: null }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              style={styles.pickerSelectStyles}
            />
          </View>

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              placeholder={{ label: 'date', value: null }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'Option A', value: 'optionA' },
                { label: 'Option B', value: 'optionB' },
                { label: 'Option C', value: 'optionC' },
              ]}
              style={styles.pickerSelectStyles}
            />
          </View>
        </View>

        <ScrollView style={styles.materialContainer} contentContainerStyle={styles.materialContent}>
  {materials.map((material) => (
    <View key={material.id} style={[styles.material, { backgroundColor: material.color }]}>
      <View style={[styles.colorRectangle, { backgroundColor: material.color }]} />
      <Text>{material.name}</Text>
      <View style={styles.weightContainer}>
        {material.weight > 0 && <Text style={styles.weightText}>{material.weight} kg</Text>}
        <View style={styles.weightInputContainer}>
          {editingMaterialId === material.id ? (
            <TextInput
              style={styles.weightInput}
              keyboardType="numeric"
              placeholder="Enter weight"
              onChangeText={(text) => addWeight(material.id, parseInt(text))}
            />
          ) : (
            <TouchableOpacity onPress={() => handleWeightEdit(material.id)} style={styles.editButton}>
              <Text style={styles.editButtonText}>+</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.kgText}>kg</Text>
        </View>
      </View>
    </View>
  ))}
</ScrollView>


        <Text>Total weight: {totalWeight} kg</Text>

        <TextInput
          style={styles.commentInput}
          multiline
          numberOfLines={4}
          onChangeText={(text) => setComment(text)}
          placeholder="Enter comments"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.cancelButton, { backgroundColor: 'grey', borderRadius: 10 }]} onPress={goBack}>
            <Text style={[styles.buttonText, { color: 'white', fontWeight: 'bold' }]}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.submitButton, { backgroundColor: 'green', borderRadius: 10 }]}
            onPress={submitMaterials}>
            <Text style={[styles.buttonText, { color: 'white', fontWeight: 'bold' }]}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Classify;


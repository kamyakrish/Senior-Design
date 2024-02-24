import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import Header from './header'; // Import Header component
import dashboard from './dashboard'; // Import dashboard component
import RNPickerSelect from 'react-native-picker-select';
import Axios from 'axios';
import styles from './styles';

const Classify = () => {
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Material A', weight: 0, color: '#ff6347' },
    { id: 2, name: 'Material B', weight: 0, color: '#ffd700' },
    { id: 3, name: 'Material C', weight: 0, color: '#20b2aa' },
    { id: 4, name: 'Material D', weight: 0, color: '#00bfff' },
    { id: 5, name: 'Material E', weight: 0, color: '#ff4500' },
    { id: 6, name: 'Material F', weight: 0, color: '#9932cc' },
    { id: 7, name: 'Material G', weight: 0, color: '#00fa9a' },
    { id: 8, name: 'Material H', weight: 0, color: '#9370db' },
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
              <View style={styles.weightInputContainer}>
                {editingMaterialId === material.id ? ( // Render TextInput only if editingMaterialId matches the current material id
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
          <TouchableOpacity style={[styles.cancelButton, { backgroundColor: '#007bff', borderRadius: 10 }]}>
            <Text style={[styles.buttonText, { color: 'white', fontWeight: 'bold' }]}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.submitButton, { backgroundColor: '#007bff', borderRadius: 10 }]}
            onPress={submitMaterials}>
            <Text style={[styles.buttonText, { color: 'white', fontWeight: 'bold' }]}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Classify;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Entry = ({ onAdd }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBags, setSelectedBags] = useState(null);
  const [weight, setWeight] = useState('');

  const colorItems = [
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Brown', value: 'brown' },
  ];

  const bagsItems = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];

  const handleAdd = () => {
    if (selectedColor && selectedBags && weight) {
      onAdd(selectedColor, selectedBags, weight);
      setSelectedColor(null);
      setSelectedBags(null);
      setWeight('');
    } else {
      console.log('Please select all fields');
    }
  };

  const getColorStyle = (colorValue) => {
    switch (colorValue) {
      case 'blue':
        return { color: 'blue' };
      case 'yellow':
        return { color: 'yellow' };
      case 'brown':
        return { color: 'brown' };
      default:
        return { color: 'black' }; 
    }
  };

  return (
    <View style={styles.dropdownSectionContainer}>
      <View style={styles.dropdownSection}>
        
        {/* Color of Bag */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Color</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedColor(value)}
            items={colorItems}
            style={{
              ...pickerSelectStyles,
              inputIOS: { ...pickerSelectStyles.inputIOS, ...getColorStyle(selectedColor) },
              inputAndroid: { ...pickerSelectStyles.inputAndroid, ...getColorStyle(selectedColor) },
            }}
            value={selectedColor}
            placeholder={{ label: 'Color', value: null }}
            useNativeAndroidPickerStyle={false} 
          />
        </View>

        {/* Number of Bags */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Count</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedBags(value)}
            items={bagsItems}
            style={pickerSelectStyles}
            value={selectedBags}
            placeholder={{ label: 'Select number of bags', value: null }}
          />
        </View>

        {/* Weight Input */}
        <View style={styles.dropdownContainer}>
  <Text style={styles.label}>Weight</Text>
  <View style={styles.weightInputContainer}>
    <TextInput
      style={styles.weightInput}
      onChangeText={setWeight}
      value={weight}
      placeholder="20"
      keyboardType="numeric"
    />
    <Text style={styles.kgLabel}>KG</Text>
  </View>
</View>
      </View>

      {/* Add Button */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownSectionContainer: {
    marginTop:20,
    backgroundColor: '#e3f2fd', // Distinct light color for the background
    padding: 10, // Add some padding around the entire container for spacing
    borderRadius: 5, // Optional: Add a slight border radius for a softer look
  },
  dropdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
   
  },
  dropdownContainer: {
 
    flex: 1, // Adjust this value as needed, was 1 before
    marginHorizontal: 5,
  },
  weightInputContainer: {
    flexDirection: 'row',
     
  },
  weightInput: {
    // The flex is set to 1 to take up all available space in the container
    flex: 0.6, // This will make the input expand to fill the space
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    // marginRight is removed so the KG label can be right next to the input
  },
  kgLabel: {
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  addButtonContainer:{
    alignItems: 'flex-end',
    padding: 10,
  },
  addButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Entry;
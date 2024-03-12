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

  return (
    <View style={styles.dropdownSectionContainer}>
      <View style={styles.dropdownSection}>
        
        {/* Color of Bag */}
        <View style={styles.dropdownContainer1}>
          <Text style={styles.label}>Color</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedColor(value)}
            items={colorItems}
            style={pickerSelectStyles}
            value={selectedColor}
            placeholder={{ label: 'Color', value: null }}
            useNativeAndroidPickerStyle={false} 
          />
        </View>

        {/* Number of Bags */}
        <View style={styles.dropdownContainer2}>
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
        <View style={styles.dropdownContainer1}>
  <Text style={styles.weightlabel}>Weight (KG)</Text>
  <View style={styles.weightInputContainer}>
    <TextInput
      style={styles.weightInput}
      onChangeText={setWeight}
      value={weight}
      placeholder="20"
      keyboardType="numeric"
    />
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
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', // Add flexDirection here
    alignItems: 'center', 
  },
  dropdownSection: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  dropdownContainer1: {
    flex: 1,
    marginHorizontal: 5,
  },

  dropdownContainer2: {
    flex: 0.8,
    marginHorizontal: 5,
  },
  weightInputContainer: {
    flexDirection: 'row',
    flex:1,
  },
  weightInput: {
    flex: 0.6,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  addButtonContainer: {
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
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default Entry;

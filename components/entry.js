import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Entry = ({ onAdd,selectedClient, selectedLocation }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBags, setSelectedBags] = useState(null);
  const [weight, setWeight] = useState('');

  const colorItems = [
    { label: 'Blue', value: 'Blue' },
    { label: 'Yellow', value: 'Yellow' },
    { label: 'Brown', value: 'Brown' },
    { label: 'Grey', value: 'Grey' },
  ];

  const getColorByValue = (value) => {
    switch (value) {
      case 'blue':
        return '#5884E0';
      case 'yellow':
        return '#F4C343';
      case 'brown':
        return '#7A621D';
      default:
        return '#999999'; // Default color
    }
  };

  const bagsItems = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
  ];

  const handleAdd = () => {
    if (selectedColor && selectedBags && weight && selectedClient && selectedLocation) {
      onAdd(selectedColor, selectedBags, weight);
      setSelectedColor(null);
      setSelectedBags(null);
      setWeight('');
    } else {
      // Use Alert.alert to display the warning to the user
      Alert.alert(
        "Missing Information",
        "Please select all fields including client and location",
        [
          { text: "OK" }
        ]
      );
    }
  };;

  return (
    <View style={styles.container}>
      {/* Inputs Container */}
      <View style={styles.inputsContainer}>
        {/* Color Picker */}
        <View style={styles.colorPickerContainer}>
          <Text style={styles.label}>Color</Text>
          <RNPickerSelect
    onValueChange={(value) => setSelectedColor(value)}
    items={colorItems}
    style={{
      ...pickerSelectStyles,
      inputAndroid: {
        ...pickerSelectStyles.inputAndroid,
        color: getColorByValue(selectedColor),
      },
      inputIOS: {
        ...pickerSelectStyles.inputIOS,
        color: getColorByValue(selectedColor),
      },
    }}
    value={selectedColor}
    placeholder={{ label: 'Color', value: null }}
    useNativeAndroidPickerStyle={false}
  />
        </View>

        {/* Count Picker */}
        <View style={styles.countPickerContainer}>
          <Text style={styles.label}>Count</Text>
          <RNPickerSelect
            onValueChange={setSelectedBags}
            items={bagsItems}
            style={pickerSelectStyles}
            value={selectedBags}
            placeholder={{ label: 'Select number of bags', value: null }}
          />
        </View>

        {/* Weight Input */}
        <View style={styles.weightInputContainer}>
          <Text style={styles.wlabel}>Weight (KG)</Text>
          <TextInput
            style={styles.weightInput}
            onChangeText={setWeight}
            value={weight}
            placeholder="20"
            keyboardType="numeric"
          />
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 5,
    marginTop: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    flex: 1, // Allow this container to expand
    marginRight: 10,

  },
  colorPickerContainer: {
    flex: 1.25, // Allows the color picker to be wider
  },
  countPickerContainer: {
    flex: 0.75, // Assigns less space than color picker
    marginLeft: 5,
  },
  weightInputContainer: {
    flex: 0.5, // Assigns less space than color picker
    marginLeft: 5,
  },
  weightInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  addButtonContainer: {
    padding: 10,
  },
  wlabel: {
    fontSize: 11,
    marginBottom: 3,
    fontWeight: 'bold',

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
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default Entry;

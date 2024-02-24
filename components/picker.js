import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const DropdownSection = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const clientItems = [
    { label: 'User A', value: 'userA' },
    // ... Add other clients here
  ];

  const locationItems = [
    { label: 'Location A', value: 'locA' },
    // ... Add other locations here
  ];

  return (
    <View style={styles.dropdownSection}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Client:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedClient(value)}
          items={clientItems}
          style={pickerSelectStyles}
          placeholder={{ label: "Select a client", value: null }}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Pickup Location:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedLocation(value)}
          items={locationItems}
          style={pickerSelectStyles}
          placeholder={{ label: "Select a location", value: null }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dropdownContainer: {
    flexDirection: 'column',
    width: '45%',
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
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

export default DropdownSection;

import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import calls from '../services/calls';

const DropdownSection = ({onClientSelect, onLocationSelect }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);


  const locationItems = [
    { label: 'Location A', value: 'locA' },
  
  ];

  useEffect(() => {
    calls.fetchClients((clientData) => {
      console.log('Fetched client data:', clientData);
      const formattedClients = clientData.map(client => ({
        label: client.client_name, 
        value: client.id
      }));
      setClients(formattedClients);
    });
  }, []);

  const onClientValueChange = (clientId) => {
    const id = parseInt(clientId)
    const selectedClient = clients.find(client => client.value === id);
    setSelectedClient(selectedClient); 
    console.log('Selected client:', selectedClient);
    if (selectedClient && selectedClient.locations) {
      const locationItems = selectedClient.locations.map(location => ({
        label: location.name,
        value: location.id, 
      }));
      setLocations(locationItems);
    } else {
      setLocations([]);
    }
  };





  return (
    <View style={styles.dropdownSection}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Client:</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            console.log('Value selected from RNPickerSelect:', value); // This should log the selected client's ID
            onClientValueChange(value);
          }}
          items={clients} 
          style={pickerSelectStyles}
          placeholder={{ label: "Select a client", value: null }}
        />
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Pickup Location:</Text>
        <RNPickerSelect
    onValueChange={onLocationSelect}
    items={locations}
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
    fontSize: 12,
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

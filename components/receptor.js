import React ,{useState}from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './header';
import DropdownSection from './picker';
import Entry from './entry'
import Dashboard from './dashboard';

const Receptor = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const [totalBags, setTotalBags] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [selectedClient, setSelectedClient] = useState(null);
const [selectedLocation, setSelectedLocation] = useState(null);
  const handleAddEntry = (color, bags, weight) => {
    const newEntry = { color, bags: parseInt(bags), weight: parseInt(weight) };
    setEntries([...entries, newEntry]);
    setTotalBags(prevTotalBags => prevTotalBags + parseInt(bags));
    setTotalWeight(prevTotalWeight => prevTotalWeight + parseInt(weight));
  };

  const handleRemoveEntry = (index) => {
    const entryToRemove = entries[index];
    if (!entryToRemove) return;
  
    setEntries(entries.filter((_, entryIndex) => entryIndex !== index));
    setTotalBags(prevTotalBags => prevTotalBags - entryToRemove.bags);
    setTotalWeight(prevTotalWeight => prevTotalWeight - entryToRemove.weight);
  };
  
const goBack = () => {
    navigation.goBack(); 
  };
  
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title ="Collect"/>
      
      <DropdownSection
  onClientSelect={setSelectedClient}
  onLocationSelect={setSelectedLocation}
/>

<Entry 
  onAdd={handleAddEntry} 
  selectedClient={selectedClient}
  selectedLocation={selectedLocation} 
/>


      <Dashboard 
      entries={entries}
      totalBags={totalBags}
      totalWeight={totalWeight} 
      onRemove={handleRemoveEntry}
      navigation={navigation}
      selectedClient={selectedClient}
      selectedLocation={selectedLocation}
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  // ...rest of your styles
});

export default Receptor;
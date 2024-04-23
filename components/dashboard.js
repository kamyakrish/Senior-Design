import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';

const Dashboard = ({ entries, totalBags, totalWeight, onRemove, navigation }) => {
  
  const DashboardHeader = () => (
    <View style={styles.headerRow}>
       <Text style={styles.headerText}>Color</Text>
      <Text style={styles.headerText}>Count</Text>
      <Text style={styles.headerText}>Weight</Text>
      <View style={{ width: 50, /* This width should match the removeButton's width */ }}></View>
    </View>
  );
  
  const DashboardEntry = ({ item, onRemove }) => (
    <View style={styles.entryRow}>
      <Text style={styles.entryText}>{item.color}</Text>
      <Text style={styles.entryText}>{item.bags}</Text>
      <Text style={styles.entryText}>{`${item.weight} KG`}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
  const handleCancel = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Canceled");
            navigation.navigate('Home'); // This will navigate to the Home screen after confirmation
          },
        }
      ]
    );
  };
  

  const handleRemove = (index) => {
    Alert.alert(
      "Remove",
      "Are you sure you want to remove this entry?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => onRemove(index),
        }
      ]
    );
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.headerLine} />
      <View style={styles.listContainer}>
      <DashboardHeader />
      <FlatList
  data={entries}
  keyExtractor={(item, index) => 'entry-' + index}
  renderItem={({ item, index }) => (
    <DashboardEntry item={item} onRemove={() => handleRemove(index)} />
  )}
/>
      </View>
      <View style={styles.totalsContainer}>
        <Text style={styles.total}>Total Bags: {totalBags}</Text>
        <Text style={styles.total}>Total Weight: {totalWeight} KG</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e3e3e3', // You can change the color as needed
  },
  entryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign:'center'
  },
  container: {
    flex: 1, // Take up all available space
    marginTop: 60,
    backgroundColor: '#f7f7f7',
  },
  headerLine: {
    height: 10,
    backgroundColor: '#0038A8',
  },
  listContainer: {
    flex: 1, // Allow this container to grow and fill available space
  },
  headerLine: {
    height: 10, // Height for the blue line
    backgroundColor: '#0038A8', // Blue line
    width: '100%', // Set to 100% to extend across the screen width
  },

  entryText: {
    flex: 1, // Ensure text takes up the available space
    textAlign:'center',
  },
  removeButton: {
    width:50,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center'
  },
  totalsContainer: {
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },

  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },


  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';

const Dashboard = ({ entries, totalBags, totalWeight, onRemove }) => {
  
  const handleCancel = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => console.log("Canceled"),
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
        <FlatList
          data={entries}
          keyExtractor={(item, index) => 'entry-' + index}
          renderItem={({ item, index }) => (
            <View style={styles.entry}>
              <Text style={styles.entryText}>{item.bags} {item.color} Bags, {item.weight} KG</Text>
              <TouchableOpacity onPress={() => handleRemove(index)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.totalsContainer}>
        <Text style={styles.total}>Total Bags: {totalBags}</Text>
        <Text style={styles.total}>Total Weight: {totalWeight} KG</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  entryText: {
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
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

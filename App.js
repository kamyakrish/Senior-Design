import React, { useState, createContext, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Receptor from './components/receptor';
import Classify from './components/classify'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create a context to manage the logged-in user
const UserContext = createContext();

// Home component with three buttons
const Home = ({ navigation }) => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.homeContainer}>
      <Text>Welcome, {user}</Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Collect')}
      >
        <Text>Collect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Classify')}
      >
        <Text>Classify</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('PastCollections')}
      >
        <Text>Past Collections</Text>
      </TouchableOpacity>
    </View>
  );
};

// Login component with dropdown menu and navigation to Home
const LoginPage = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handlePersonSelect = (person) => {
    setUser(person);
    setShowDropdown(false);
    // Navigate to the Home screen after selecting a login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <Text>Select Person</Text>
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdownMenu}>
          {['A', 'B', 'C'].map((person) => (
            <TouchableOpacity
              key={person}
              style={styles.dropdownItem}
              onPress={() => handlePersonSelect(person)}
            >
              <Text>{person}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

// Main App component with navigation
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={Home} />
          {/* Replace the following placeholders with your actual components */}
          <Stack.Screen name="Collect" component={Receptor} />
          <Stack.Screen name="Classify" component={Classify} />
          {/*<Stack.Screen name="PastCollections" component={YourPastCollectionsComponent} />*/}
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButton: {
    margin: 10,
    padding: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
});

export default App;

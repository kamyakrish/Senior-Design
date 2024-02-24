import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ client, location }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerLine} />
        <View style={styles.headerContent}>
          <Image
            source={require('./logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>Pick Up</Text>
          <Image
            source={require('./logo.png')}
            style={styles.userIcon}
          />
        </View>
        <View style={styles.headerLine} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: 'white', // Or any other color that matches your header
    },
    container: {
      backgroundColor: '#FFF',
    },
    headerLine: {
      height: 10, // Height for the blue line
      backgroundColor: '#0038A8', // Blue line
      width: '100%', // Set to 100% to extend across the screen width
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    logo: {
      width: 166, // Width of the logo
      height: 76, // Height of the logo
      flexShrink: 0,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    userIcon: {
      width: 30,
      height: 30, // Dimensions for the user icon
    },
  });
  

export default Header;

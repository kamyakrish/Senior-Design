import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import Header from './header';
const PastCollections =( ) =>{

return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Past Collections" />
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

export default PastCollections;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Home() {
 return (
   <View style={styles.container}>
     <Text style={styles.title}>Home</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 7,
    margin:  4,
  },
})
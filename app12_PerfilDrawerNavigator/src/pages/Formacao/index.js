import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
function Formacao() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />

    <Text style={styles.title}>Formação:</Text>
    <Text style={styles.text}>Graduando em: Sistemas para internet</Text>
    <Text style={styles.text}>Instituição: Fatec Rubens Lara</Text>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    marginHorizontal: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 7,
    margin:  4,
  },
})

export default Formacao;

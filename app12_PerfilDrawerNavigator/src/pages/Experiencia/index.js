import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
function Experiencia() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />

    <Text style={styles.title}>Experiência:</Text>
    <Text style={styles.text}>Não possuo experiência até o momento, estou em busca da minha primeira oportunidade profissional</Text>
    
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

export default Experiencia;

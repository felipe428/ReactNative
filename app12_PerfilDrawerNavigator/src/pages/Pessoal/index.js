import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Pessoal() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />

    <Text style={styles.title}>Dados Pessoais:</Text>
    <Text style={styles.text}>Nome: Felipe Santos da Silva</Text>
    <Text style={styles.text}>Idade: 20 anos</Text>
    <Text style={styles.text}>Aniversário: 10/08</Text>
    <Text style={styles.text}>Cidade: Guarujá - SP</Text>
    
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

export default Pessoal;

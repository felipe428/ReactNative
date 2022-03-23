import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
function App (){
  
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [total, setTotal] = useState()

  function primeiroValor(valor){
    setN1(valor);
  }

  function segundoValor(valor){
    setN2(valor);
  }
 
  function calcular(){
    if ( n1 != '' || n2 != '' ){
      setTotal(n1 * n2)
    }
    else{
      alert('Por favor, digite os dois valores.')
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Multiplicador de números</Text>
 
      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Digite o primeiro nº"
      onChangeText={ (texto) => primeiroValor(texto) }
      />

      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Digite o segundo nº"
      onChangeText={ (texto) => segundoValor(texto) }
      />
 
      <Button title="Calcular" onPress={calcular} />
 
      <Text style={styles.text}> Resultado: {total} </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
  },
  text:{
    textAlign: 'center',
    fontSize: 25,
  }
})
 
export default App;
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
 
function App(){
  const [numero, setNumero] = useState(0)

  function adiciona(){
    setNumero(numero + 1)
  }

  function remove(){
    if(numero > 0){
      setNumero(numero - 1)
    }
    else{
      setNumero(0)
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Contador de pessoas</Text>

      <Contador valor={numero}/>
 
      <Button color='green' title='+' onPress={adiciona}/>

      <Button color='red' title='-' onPress={remove}/>
 
    </View>
  );
}

function Contador(pessoas){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{pessoas.valor}</Text>
    </View>
  )
}
 
export default App;
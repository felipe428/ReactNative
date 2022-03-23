import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native';
 
function App (){
  
  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [total, setTotal] = useState(0)
  const [mensagem, setMensagem] = useState('')

  function valorAlcool(valor){
    setAlcool(valor)
  }

  function valorGasolina(valor){
    setGasolina(valor)
  }

  function verificar(){
    if (alcool != '' && gasolina != ''){
      setTotal(alcool / gasolina)

      if(total != 0 && total < 0.7){
        setMensagem('É melhor abastecer com álcool.')
      }
      else if(total >= 0.7){
        setMensagem('É melhor abastecer com gasolina.')
      }
    }
    else{
      alert('Por favor, digite os dois valores.')
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Álcool ou Gasolina</Text>

      <Image
        source={{ uri: 'https://licencesolucoes.com.br/wp-content/uploads/2020/07/original-cdfc69162edccef3c40b3b70243031ff.jpeg'}}
        style={styles.img}
      />
 
      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Preço do Álcool (ex: 4.55)"
      onChangeText={ (texto) => valorAlcool(texto) }
      />

      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Preço da Gasolina (ex: 5.96)"
      onChangeText={ (texto) => valorGasolina(texto) }
      />
 
      {/*clique 2x*/}
      <Pressable  onPress={verificar}>
        <Text style={styles.button}>
            Verificar
        </Text>
      </Pressable>
 
      <Text style={styles.text}> Resultado: {total} </Text>

      <Text style={styles.text}>
        {mensagem}
      </Text>
      
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
    marginTop: 20,
    color: '#0D7F00'
  },
  input:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 4,
    fontSize: 20,
  },
  text:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#0D7F00',
    textAlign: 'center',
    color: 'white',
  },
})
 
export default App;
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable} from 'react-native';
 
function App (){
  
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [total, setTotal] = useState(0)
  const [mensagem, setMensagem] = useState('')

  function valorPeso(valor) {
    setPeso(valor)
  }

  function valorAltura(valor) {
    setAltura(valor)
  }

  function verificar(){
    if (peso != '' && altura != ''){
      setTotal(peso/(altura**2));

      if(total < 18.5) {
        setMensagem('Abaixo do peso.')
      } 
      else if(total >= 18.5 && total <= 24.9) {
        setMensagem('Peso normal.')
      }
      else if(total >= 25 && total <= 29.9) {
        setMensagem('Sobrepeso.')
      }
      else if(total >= 30 && total <= 34.9) {
        setMensagem('Obesidade Grau I.')
      }
      else if(total >= 35 && total <= 39.9) {
        setMensagem('Obesidade Grau II.')
      }
      else if(total >= 40) {
        setMensagem('Obesidade Grau III ou Mórbida.')
      }
    }
    else{
      alert('Por favor, digite os dois valores.')
    }
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Calculadora de IMC</Text>

      <Image
        source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/87/2020/10/28/balanca-peso-1603920684761_v2_900x506.jpg.webp'}}
        style={styles.img}
      />
 
      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Digite o peso em Kg (ex: 62.80)"
      onChangeText={ (texto) => valorPeso(texto) }
      />
      
      <TextInput style={styles.input} 
      keyboardType="numeric"
      placeholder="Digite a altura em M (ex: 1.75)"
      onChangeText={ (texto) => valorAltura(texto) }
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
    color: '#6094EE',
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
    backgroundColor: '#3476E7',
    textAlign: 'center',
    color: 'white',
  },
})
 
export default App;
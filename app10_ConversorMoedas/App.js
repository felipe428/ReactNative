import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

function App (){

  const [valor, setValor] = useState()
  const [de, setDe] = useState('real')
  const [para, setPara] = useState('real')
  const [valorConvertido, setValorConvertido] = useState()

  function converter(){
    if(de === 'real' && valor) {
      if(para === 'real') {
        setValorConvertido(+valor)
      } else if(para === 'dolar') {
        setValorConvertido(+valor * 0.22)
      } else {
        setValorConvertido(+valor * 0.20)
      }
    } else if(de === 'dolar' && valor) {
        if(para === 'real') {
          setValorConvertido(+valor * 4.61)
        } else if(para === 'dolar') {
          setValorConvertido(+valor)
        } else {
          setValorConvertido(+valor * 0.91)
        }
    } else if(de === 'euro' && valor) {
        if(para === 'real') {
          setValorConvertido(+valor * 5.05)
        } else if(para === 'dolar') {
          setValorConvertido(+valor * 1.10)
        } else {
          setValorConvertido(+valor)
        }
      }
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <Text style={styles.subtitle}>Real, Dolar, Euro</Text>

      <Text style={styles.text}>Valor: </Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        placeholder='Digite um valor'
        onChangeText={ (texto) => setValor(texto) }
      />

      <Text style={styles.text}>De: </Text>
      <Picker
        selectedValue={de}
        onValueChange={(texto) => setDe(texto)} 
        enabled={true} 
      >
        <Picker.Item label="real" value="real" />
        <Picker.Item label="dolar" value="dolar" />
        <Picker.Item label="euro" value="euro" />
      </Picker>

      <Text style={styles.text}>Para: </Text>
      <Picker
        selectedValue={para}
        onValueChange={(texto) => setPara(texto)} 
        enabled={true} 
      >
        <Picker.Item label="real" value="real" />
        <Picker.Item label="dolar" value="dolar" />
        <Picker.Item label="euro" value="euro" />
      </Picker>

      <Pressable  onPress={converter}>
        <Text style={styles.button}>
          Converter
        </Text>
      </Pressable>
      
      <Text style={styles.resposta}>{valorConvertido}</Text>
  
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 1,
  },
  title:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F92E2E',
    marginVertical: 3,
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F92E2E',
    marginVertical: 2,
  },
  text:{
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  input:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 4,
    fontSize: 15,
  },
  button: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#11A111',
    textAlign: 'center',
    color: 'white',
  },
  resposta:{
    color: '#11A111',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 10,
  },
})

export default App;

import React from 'react';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { View, ScrollView, Text, TextInput, Switch, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

function App (){

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState('masculino');
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState();
  const [brasileiro, setBrasileiro] = useState(false);
  const [data, setData] = useState();

  function mostrar() {
    setData({
      nome,
      idade,
      sexo,
      limite,
      escolaridade,
      brasileiro: brasileiro === true ? 'sim' : 'não',
    })
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>
      <ScrollView>
        <Text style={styles.text}>Nome: </Text>
        <TextInput style={styles.input} 
          placeholder='Digite seu nome completo'
          onChangeText={ (texto) => setNome(texto) }
        />

        <Text style={styles.text}>Idade: </Text>
        <TextInput style={styles.input}
          keyboardType='numeric'
          placeholder='Digite sua idade'
          onChangeText={ (texto) => setIdade(texto) }
        />

        <Text style={styles.text}>Sexo: </Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(texto) => setSexo(texto)} 
          enabled={true} 
        >
          <Picker.Item label="masculino" value="masculino" />
          <Picker.Item label="feminino" value="feminino" />
          <Picker.Item label="prefiro não dizer" value="prefiro não dizer" />
        </Picker>

        <Text style={styles.text}>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={(texto) => setEscolaridade(texto)} 
          enabled={true} 
        >
          <Picker.Item label="ensino fundamental incompleto" value="ensino fundamental incompleto" />
          <Picker.Item label="ensino fundamental completo" value="ensino fundamental completo" />
          <Picker.Item label="ensino médio incompleto" value="ensino médio incompleto" />
          <Picker.Item label="ensino médio completo" value="ensino médio completo" />
          <Picker.Item label="ensino superior incompleto" value="ensino superior incompleto" />
          <Picker.Item label="ensino superior completo" value="ensino superior completo" />
          <Picker.Item label="acima de ensino superior" value="acima de ensino superior" />
        </Picker>

        <Text style={styles.text}>Limite: </Text>
        <Slider 
          style={{width: 200}}
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(valor) => setLimite(valor)}
          value={limite}
          step={100}
          minimumTrackTintColor='#1BB959'
          thumbTintColor='#1BA4B9'
        />
        <Text style={styles.text}>{limite}</Text>

        <Text style={styles.text}>Brasileiro: </Text>
        <Switch 
          value={brasileiro}
          onValueChange={() => setBrasileiro(previousState => !previousState)}
          thumbColor='#1BB99F'
        />
      
        <Pressable  onPress={mostrar}>
          <Text style={styles.button}>
            Confirmar
          </Text>
        </Pressable>

        <View>
          <Text style={styles.subtitle}>Dados informados: </Text>
          {data && Object.keys(data).map((item) => {
            return (
              <View style={styles.flex} key={item}>
                <Text style={styles.text}>
                  {item}: 
                </Text>
                <Text style={styles.resposta}> {data[item]} </Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 3,
  },
  title:{
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#F92E2E',
    marginVertical: 10,
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1BA4B9',
    marginVertical: 5,
  },
  text:{
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  flex: {
    alignItems: 'center', 
    flexDirection: 'row'
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
    backgroundColor: '#289D8A',
    textAlign: 'center',
    color: 'white',
  },
  resposta:{
    color: '#F92E2E',
    fontSize: 20,
    marginTop: 10,
  },
})

export default App;

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
 
function App (){
  
  const [numero, setNumero] = useState(0)

  function numeroAleatorio(){
    setNumero(Math.floor(Math.random()*11))
  }

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Jogo do Nº Aleatório</Text>

      <Image
        source={{ uri: 'https://conhecimentocientifico.com/wp-content/uploads/2020/12/numero-composto-definicao-fatoracao-e-exemplos-2-960x540.jpg'}}
        style={styles.img}
      />
 
      <Text style={styles.text}>
        Pense em um nº de 0 a 10
      </Text>

      <Text style={styles.result}>
        {numero}
      </Text>
      
      <Pressable  onPress={numeroAleatorio}>
        <Text style={styles.button}>
            Descobrir
        </Text>
      </Pressable>
      
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
    color: '#383838',
  },
  text:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  result:{
    color: '#AD0505',
    textAlign: 'center',
    fontSize: 35,
    marginVertical: 10,
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
    backgroundColor: '#383838',
    textAlign: 'center',
    color: 'white',
  },
})
 
export default App;
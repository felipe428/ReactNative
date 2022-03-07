import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
 
function App(){{

  const styles = {
    container: {
      flex: 1,
    },
    img: {
      width: 250,
      height: 250,
      marginVertical: 20,
      alignSelf: 'center',
    },
    text: {
      fontSize: 15,
      marginHorizontal: 4,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 7,
      marginLeft:  4,
    },
  }

  return(
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/83348302?v=4'}}
        style={styles.img}
      />

      <Text style={styles.title}>Dados Pessoais:</Text>
      <Text style={styles.text}>Nome: Felipe Santos da Silva</Text>
      <Text style={styles.text}>Idade: 20 anos</Text>
      <Text style={styles.text}>Aniversário: 10/08</Text>
      <Text style={styles.text}>Cidade: Guarujá - SP</Text>

      <Text style={styles.title}>Formação:</Text>
      <Text style={styles.text}>Graduando em: Sistemas para internet</Text>
      <Text style={styles.text}>Instituição: Fatec Rubens Lara</Text>

      <Text style={styles.title}>Experiência:</Text>
      <Text style={styles.text}>Não possuo experiência até o momento, estou em busca da minha primeira oportunidade profissional</Text>
        
      <Text style={styles.title}>Projetos:</Text>
      <Text style={styles.text}>Github: <Text style={{color: '#478DFF'}} onPress={() => {Linking.openURL('https://reactnative.dev');}}>https://github.com/felipe428</Text></Text>

    </View>
  )
}}

export default App;
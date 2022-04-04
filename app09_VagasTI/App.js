import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Vagas from './components/Vagas';

function App (){

  const feed = [
    {cargo: 'Dev SQL', decricao: 'criar e fazer manutenção no banco de dados.', salario: 'R$ 6.000', contato: '(11) 9651234880'},
    {cargo: 'Analista QA', decricao: 'fazer testes funcionais e de performance.', salario: 'R$ 3.350', contato: '(33) 8563204709'},
    {cargo: 'Estagiário de suporte', decricao: 'cuidar das redes de computadores da empresa.', salario: 'R$ 1.100', contato: '(75) 658423079'},
    {cargo: 'Dev FullStack senior', decricao: 'executar projetos de front-end e back-end.', salario: 'R$ 10.000', contato: '(10) 963254071'},
    {cargo: 'Head de testes', decricao: 'responsável pelo setor de testes.', salario: 'R$ 8.750', contato: '(48) 856247190'},
  ]
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <ScrollView>
        <View>
          {
            feed.map((info, index) => (
              <Vagas
                key={index}
                cargo={info.cargo}
                descricao={info.decricao}
                salario={info.salario}
                contato={info.contato}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#F92E2E',
  },
  espace:{
    marginTop: 24,
    paddingHorizontal: 16
  }
})

export default App;
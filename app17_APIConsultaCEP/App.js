import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: [],
      cepValor: '',
      valorRetorno: '',
    };
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorCep = this.state.cepValor;
    const response = await api.get(`ws/${valorCep}/json`);
    this.setState({
      cep: response.data,
    });
    this.setState({
      valorRetorno: `
        CEP: ${this.state.cep.cep} \n
        LOGRADOURO: ${this.state.cep.logradouro} \n
        BAIRRO: ${this.state.cep.bairro} \n
        CIDADE: ${this.state.cep.localidade} \n
        ESTADO: ${this.state.cep.uf}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>CEP x Endereço</Text>
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Informe o CEP: "
            style={styles.input}
            onChangeText={(value) => this.setState({ cepValor: value })}
            keyboardType="numeric"
          />

          <TouchableOpacity onPress={this.retorno}>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="map-marker-radius"
              size={40}
              color={'#3371FF'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Text style={styles.text}>
            Informações do endereço:{'\n'}
            {this.state.valorRetorno}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    paddingTop: 20,
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 25,
    marginBottom: 50,
    color: '#3371FF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    padding: 10,
    width: 350,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    color: '#EEEEEE',
    fontSize: 16,
  },
  box: {
    backgroundColor: '#3371FF',
    color: 'white',
    marginTop: 50,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
  },
});

export default App;
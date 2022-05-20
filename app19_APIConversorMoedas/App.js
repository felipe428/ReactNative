import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      de: 'BRL',
      para: 'USD',
      resultado: [],
    };
    this.converter = this.converter.bind(this);
  }

  async converter() {
    if (this.state.valor == '') {
      this.setState({ resultado: 'Digite o valor!' });
    } else {
      let valor = parseInt(this.state.valor);
      let de = this.state.de;
      let para = this.state.para;
      let final = this.state.de + this.state.para;
      console.log(this.state.valor, this.state.de, this.state.para);
      let response = await api.get(
        `https://economia.awesomeapi.com.br/json/last/${de}-${para}`
      );
      var resultado = 0;

      switch (de) {
        case 'BRL':
          switch (para) {
            case 'USD':
              resultado = (response.data.BRLUSD.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.BRLEUR.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'USD':
          switch (para) {
            case 'BRL':
              resultado = (response.data.USDBRL.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.USDEUR.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'EUR':
          switch (para) {
            case 'USD':
              resultado = (response.data.EURUSD.bid * valor).toFixed(2);
              break;
            case 'BRL':
              resultado = (response.data.EURBRL.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'BTC':
          switch (para) {
            case 'USD':
              resultado = (response.data.BTCUSD.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.BTCEUR.bid * valor).toFixed(2);
              break;
            case 'BRL':
              resultado = (response.data.BTCBRL.bid * valor * 1000).toFixed(2);
              break;
          }
          break;
      }
      console.log(resultado);
      this.setState({
        resultado: resultado,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>

        <View style={styles.group}>
          <Text style={styles.text}>Valor</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Digite o valor"
            value={this.state.valor}
            onChangeText={(value) => {
              this.setState({ valor: value });
            }}
          />
        </View>

        <View style={styles.group}>
          <Text style={styles.text}>De:</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.de}
            onValueChange={(valor) => {
              this.setState({ de: valor });
            }}>
            <Picker.Item key={1} value={'BRL'} label="Real" />
            <Picker.Item key={2} value={'USD'} label="Dólar" />
            <Picker.Item key={3} value={'EUR'} label="Euro" />
            <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
          </Picker>
        </View>

        <View style={styles.group}>
          <Text style={styles.text}>Para:</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.para}
            onValueChange={(valor) => {
              this.setState({ para: valor });
            }}>
            <Picker.Item key={1} value={'BRL'} label="Real" />
            <Picker.Item key={2} value={'USD'} label="Dólar" />
            <Picker.Item key={3} value={'EUR'} label="Euro" />
            <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.buttom}
          onPress={this.converter}>
          <Text
            style={styles.buttomText}>
            Converter
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            style={styles.result}>
            {this.state.resultado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#17AC34',
    color: 'white',
    padding: 15,
  },
  input: {
    width: '70%',
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    fontSize: 20,
    padding: 10,
    color: '#044A12',
    borderColor: 'black',
    textAlign: 'center',
    marginTop: 30,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 25,
    color: '#0A6D1D',
    marginTop: 30,
  },
  picker: {
    fontSize: 30,
    marginTop: 25,
    marginLeft: 30,
    width: 120,
  },
  buttom: {
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#17AC34',
    color: 'white',
    padding: 15,
    marginLeft: 10,
    borderWidth: 1,
    margin: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttomText: {
    fontSize: 22,
    marginRight: 10,
    color: 'white',
    alignItems: 'center',
  },
  result: {
    fontSize: 26,
    margin: 10,
    color: '#044A12',
    textAlign: 'center',
  }
});

export default App;
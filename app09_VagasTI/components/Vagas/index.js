import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

function Vagas(props) {

  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.blue]}>{props.cargo}</Text>
        <Text style={styles.text}>Salário: {props.salario}</Text>
        <Text style={styles.text}>Descrição: {props.descricao}</Text>
        <Text style={styles.text}>Contato: {props.contato}</Text>
        <Text></Text>
    </View>
  );
}

export default Vagas;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Abertura de Conta',
          headerStyle:{
            backgroundColor: '#F7F7F7',
          },
          headerTintColor: '#F92E2E',
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen 
        name="Resultado" 
        component={Resultado}
        options={{
          title:'Dados Informados',
          headerStyle:{
            backgroundColor: '#F7F7F7',
          },
          headerTintColor: '#1BA4B9',
          headerTitleAlign: 'center',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
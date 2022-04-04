import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

function App (){
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://images-americanas.b2w.io/produtos/01/00/img/1611315/9/1611315984_1GG.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Anúncio1
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://static.clubeextra.com.br/img/uploads/1/747/20213747.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Anúncio2
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://www.salonline.com.br/ccstore/v1/images/?source=/file/v8711895929868452830/products/43232.1.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Anúncio3
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://www.sitedebelezaemoda.com.br/wp-content/uploads/2020/02/Base-%E2%80%9CStudio-Fix%E2%80%9D-%E2%80%93-M.A.C-945x630.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Anúncio4
          </Text>
        </View>
        <View style={styles.espace}>
          <Image
            source={{ uri: 'https://images-americanas.b2w.io/produtos/2813359740/imagens/carrinho-de-controle-remoto-policia-super-carro-brinquedo/2813359740_1_large.jpg'}}
            style={styles.img}
          />
          <Text style={styles.text}>
            Anúncio5
          </Text>
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
    color: '#F92E2E',
    marginVertical: 20,
  },
  text:{
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginTop: 10,
  },
  img: {
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  espace: {
    paddingHorizontal: 5,
  }
})

export default App;
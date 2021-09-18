import React, {useState, useEffect} from 'react';
import { View } from '../components/Themed';
import * as Styled from './components';
import {getProducts} from '../services';

export default function ShowProducts({ navigation, route }) {
  const products = [];

useEffect(() => {
  const productsBAckEnd = [{
    name:"arroz",
    price: "30",
    description:"arroz Tio João",
    category: "comida",
    barcode:"47575757585"
  },{
    name:"chocolate",
    price: "30",
    description:"Nestle",
    category: "comida",
    barcode:"47575757585"
  },{
    name:"bolo",
    price: "30",
    description:"Tia Nastácia",
    category: "comida",
    barcode:"47575757585"
  }];

  productsBAckEnd && productsBAckEnd.map((product, index) => {
    if(product.name === route.params) {
      console.log("route.params: ", route.params, product);
      products.push(product);
      console.log("products: ", products);
    }
  });
}, []);

  return (
    <Styled.ScreenShowCards>
      {console.log('Products: ', typeof products)}
    {products && products.length > 0 && products.map((product, index) => {
      return (<Styled.Card key={index} height={170} width="92%" onPress={() => navigation.navigate('InformationProduct', product)}>
        <Styled.Title center={true} height="20">{product.name}</Styled.Title>
        <View>
          <Styled.DefaultImage
            height={120} width="100%"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.DefaultText>{product.description}</Styled.DefaultText>
        </View>
        </Styled.Card>
      );
    })
  }
    </Styled.ScreenShowCards>
  );
}

import React, {useEffect} from 'react';
import { View } from '../components/Themed';
import * as Styled from './components';
import {getProducts} from '../services';

export default function ShowProducts({ navigation }) {
  const products = [{
    name:"arroz",
    price: "30",
    description:"arroz Tio João",
    category: "food",
    barcode:"47575757585"
},{
  name:"chocolate",
  price: "30",
  description:"Nestle",
  category: "food",
  barcode:"47575757585"
},{
  name:"bolo",
  price: "30",
  description:"Tia Nastácia",
  category: "food",
  barcode:"47575757585"
}];

useEffect(() => {
  // console.log(getProducts());
}, []);

  return (
    <Styled.ScreenShowCards>
      {
    products && products.map((product, index) => {
      return (<Styled.Card key={index} height="170px" width="92%" onPress={() => navigation.navigate('InformationProduct', product)}>
        <Styled.Title center={true} height="20px">{product.name}</Styled.Title>
        <View>
          <Styled.DefaultImage
            height="120px" width="100%"
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

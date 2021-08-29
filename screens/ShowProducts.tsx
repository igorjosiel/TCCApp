import React, {useEffect} from 'react';
import { StyleSheet, Image } from 'react-native'
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as Styled from './components';
import { Card } from 'react-native-elements';
import {getProducts} from '../services';

export default function ShowProducts({ navigation }: RootTabScreenProps<'TabOne'>) {
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
    <Styled.StyledScreenShowCards>
      {
    products && products.map((product, index) => {
      return (<Styled.StyledCard height="170px" width="92%">
        <Styled.StyledTitle>{product.name}</Styled.StyledTitle>
        <Card.Divider/>
        <View key={index}>
          <Card.Image
            style={{height: '100px', paddingTop: 0}}
            // resizeMode="cover"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.StyledText>{product.description}</Styled.StyledText>
        </View>
        </Styled.StyledCard>
      );
    })
  }
    </Styled.StyledScreenShowCards>
  );
}

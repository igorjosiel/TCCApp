import React, { useState, useEffect } from 'react';
import { View } from '../components/Themed';
import * as Styled from './components';
import { listProducts } from '../services';

export default function ShowProducts({ navigation }) {
  const [products, setProducts] = useState();

//   const products = [{
//     name:"arroz",
//     price: "30",
//     description:"arroz Tio João",
//     category: "comida",
//     barcode:"47575757585"
// },{
//   name:"chocolate",
//   price: "30",
//   description:"Nestle",
//   category: "comida",
//   barcode:"47575757585"
// },{
//   name:"bolo",
//   price: "30",
//   description:"Tia Nastácia",
//   category: "comida",
//   barcode:"47575757585"
// },
// {
//   name:"bolo",
//   price: "30",
//   description:"Tia Nastácia",
//   category: "comida",
//   barcode:"47575757585"
// },
// {
//   name:"bolo",
//   price: "30",
//   description:"Tia Nastácia",
//   category: "comida",
//   barcode:"47575757585"
// },
// {
//   name:"bolo",
//   price: "30",
//   description:"Tia Nastácia",
//   category: "comida",
//   barcode:"47575757585"
// }];

useEffect(() => {
  const fetchSearchProducts = async () => {
    const { data } = await listProducts();
    setProducts(data);
  }

  fetchSearchProducts();
}, []);

  return (
    <Styled.ScreenShowCards>
      <Styled.Scroll centerContent={true} showsVerticalScrollIndicator={false}>
      {products && products.map((product, index) => {
        return (<Styled.Card key={index} height={170} width="92%" marginLeft="15" onPress={() => navigation.navigate('InformationProduct', product)}>
          <Styled.Title center={true} height="20">{product.name}</Styled.Title>
          <View>
            <Styled.DefaultImage
              height={120} width="100%"
              source={require("../assets/images/arroz.jpg")}
            />
            <Styled.DefaultText>{product.descricao}</Styled.DefaultText>
          </View>
          </Styled.Card>
        );
      })
    }
    </Styled.Scroll>
    </Styled.ScreenShowCards>
  );
}

import React, { useState, useEffect } from 'react';
import { View } from '../components/Themed';
import * as Styled from './components';
import { listProducts } from '../services';

export default function ShowProducts({ navigation }) {
  const [products, setProducts] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchSearchProducts = async () => {
      const { data, message } = await listProducts();
      setMessage(message);
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
            <Styled.DefaultText>{product.description}</Styled.DefaultText>
          </View>
          </Styled.Card>
        );
      })
    }
    </Styled.Scroll>
    </Styled.ScreenShowCards>
  );
}

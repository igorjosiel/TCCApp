import React, { useState, useEffect } from 'react';
import { View } from '../components/Themed';
import * as Styled from './components';
import { useDispatch, useSelector } from 'react-redux';

export default function ShowProducts({ navigation, route }) {
  const { cart } = useSelector((state) => state.cart);
  // const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState();

  useEffect(() => {
    const fetchSearchProducts = () => {
      setTimeout(async() => {
        setLoading(false);

        if (cart && cart.length === 0) {
          navigation.navigate('PageBought');
        }

        // setMessage(message);
        // setProducts(data);
        
      }, 1000);
    }

    fetchSearchProducts();
  }, [loading]);

  return (
    <Styled.ScreenShowCards>
      {loading ?
        <Styled.ContainerLoading>
          <Styled.Loading size="large" />
        </Styled.ContainerLoading> :
      null}

      <Styled.Scroll centerContent={true} showsVerticalScrollIndicator={false}>
      {/* {products && products.map((product, index) => {
        return (<Styled.Card key={index} height={170} width="92%" marginLeft="15" onPress={() => navigation.navigate('InformationProduct', product)}>
          <Styled.Title uppercase={true} center={true} height="20">{product.name}</Styled.Title>
          <View>
            <Styled.DefaultImage
              height={120}
              width="100%"
              source={require("../assets/images/arroz.jpg")}
            />
            <Styled.DefaultText>{product.description}</Styled.DefaultText>
          </View>
          </Styled.Card>
        );
      })
    } */}
    </Styled.Scroll>
    </Styled.ScreenShowCards>
  );
}
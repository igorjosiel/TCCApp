import React, { useState, useEffect } from 'react';
import { View, Text } from '../components/Themed';
import * as Styled from './components';
import { useDispatch, useSelector } from 'react-redux';

export default function ShowProducts({ navigation, route }) {
  const { cart } = useSelector((state) => state.cart);
  // const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState();
  const labels = ['Produto', 'Descrição', 'Categoria', 'Preço', 'Código de barras', 'Quantidade'];
  const values = ['name', 'description', 'category', 'price', 'barCode', 'amount'];

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
      {cart && cart.map((product, index) => {
        return (<Styled.Card key={index} height={385} width="92%" marginLeft="15" onPress={() => navigation.navigate('InformationProduct', product)}>
          <View>
            <Styled.DefaultImage
              height={120}
              width="100%"
              source={require("../assets/images/arroz.jpg")}
            />
              {labels && labels.map((label, index) => {
                return <Styled.CardProductBought>
                  <Styled.FontProductBought bold={true}>{label}:</Styled.FontProductBought>
                  <Styled.FontProductBought>{product[values[index]]}</Styled.FontProductBought>
                </Styled.CardProductBought>
              })}

              <Styled.ButtonDeleteProduct
                title="Remover"
                // onPress={() => getProduct()}
                // disabled={amount === 0 ? true : false}
              >
                <Styled.TextButton>
                  Remover do Carrinho
                </Styled.TextButton>
              </Styled.ButtonDeleteProduct>
          </View>
          </Styled.Card>
        );
      })
    }
    </Styled.Scroll>
    </Styled.ScreenShowCards>
  );
}
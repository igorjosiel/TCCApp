import React, { useState, useEffect } from 'react';
import { View } from '../components/Themed';
import * as Styled from './components';
import { useSelector } from 'react-redux';
import formatMoney from '../utils/formatMoney';

export default function ShowProducts({ navigation, route }) {
  const { cart, totalValue } = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(true);

  const labels = ['Produto', 'Descrição', 'Preço', 'Quantidade'];
  const values = ['name', 'description', 'price', 'amount'];

  const deleteProduct = (product, index) => {
    navigation.navigate('PageError',
    {
      message: 'Tem certeza de que deseja remover esse produto do carrinho?',
      icon: 'interrogation',
      removeProduct: '1',
      product: {product, index: index}
    });
  }

  const clearWholeCart = () => {
    navigation.navigate('PageError',
    {
      message: 'Tem certeza de que deseja limpar o carrinho?',
      icon: 'interrogation',
      removeProduct: '2'
    });
  }

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
        return (<Styled.Card key={index} height={250} width="92%" marginLeft="15">
          <View>
            <Styled.DefaultImage
              height={50}
              width="15%"
              borderRadius="90"
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
              background="orange"
              onPress={() => deleteProduct(product, index)}
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

    {cart && cart.length > 0 ?
    <>
      <Styled.Card height={45} width="92%" marginLeft="15">
        <Styled.RowsCardInformations>
          <Styled.FontProductBought bold={true}>Valor Total:</Styled.FontProductBought>
          <Styled.FontProductBought>{formatMoney(totalValue.toFixed(2).toString())}</Styled.FontProductBought>
        </Styled.RowsCardInformations>
      </Styled.Card>
      <Styled.ButtonDeleteProduct
        title="Remover"
        background="#FF6347"
        onPress={() => clearWholeCart()}
      >
        <Styled.TextButton>
          Limpar o Carrinho
        </Styled.TextButton>
      </Styled.ButtonDeleteProduct>
    </>: null}
    </Styled.Scroll>
    </Styled.ScreenShowCards>
  );
}
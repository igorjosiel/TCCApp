import React, { useState, useEffect } from 'react';
import * as Styled from './components';
import { useDispatch } from 'react-redux';
import { removeProductCart } from '../store/cart';

const PageError = ({navigation, route}) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [icon, setIcon] = useState('');
  const [product, setProduct] = useState(0);
  const [removeProduct, setRemoveProduct] = useState();

  useEffect(() => {
    setMessage(route.params.message);
    setIcon(route.params.icon);
    setProduct(route.params.product);

    if (route.params.removeProduct) {
      setRemoveProduct(route.params.removeProduct);
    }
  }, []);

  return <Styled.ScreenShowCards>
    <Styled.CardHomeScreen disabled={false} height={200} width="80%" marginTop='50%'>
      <Styled.IconButton marginTop='15%' name={icon} size={50} color="black" marginLeft="auto" marginRight="auto" />
      <Styled.TextHomeScreen>{message}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.Button
      title="Pesquisar"
      color="#00BFFF"
      onPress={!removeProduct ? () => navigation.navigate('ReadBarCode') : () => {dispatch(removeProductCart(product)); navigation.navigate('PageBought')}}>
        <Styled.TextButton>
            {!removeProduct ? 'Voltar' : 'Remover'}
        </Styled.TextButton>
    </Styled.Button>
  </Styled.ScreenShowCards>
}

export default PageError;
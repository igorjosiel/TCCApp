import React, { useState, useEffect } from 'react';
import * as Styled from './components';
import { useDispatch } from 'react-redux';
import { removeProductCart, clearCart } from '../store/cart';
import { clearList, removeProductList } from '../store/list';

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
      onPress={!removeProduct ? () => navigation.navigate('ReadBarCode') :
              removeProduct === '1' ? () => {dispatch(removeProductCart(product)); navigation.navigate('PageBought')} :
              removeProduct === '2' ? () => {dispatch(clearCart()); navigation.navigate('PageBought')} :
              removeProduct === '3' ? () => {dispatch(removeProductList(product)); navigation.navigate('ReadBarCode')} :
              () => {dispatch(clearList()); navigation.navigate('ReadBarCode')}}>
        <Styled.TextButton>
          {!removeProduct ? 'Voltar' : 'Sim'}
        </Styled.TextButton>
    </Styled.Button>
    {removeProduct &&
    <Styled.Button
      title="Recusar"
      color="#00BFFF"
      onPress={() => navigation.navigate('ReadBarCode')}>
        <Styled.TextButton>
          Não
        </Styled.TextButton>
    </Styled.Button>}
  </Styled.ScreenShowCards>
}

export default PageError;
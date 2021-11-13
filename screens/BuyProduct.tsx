import React, {useEffect, useState} from 'react';
import { View, Button } from 'react-native';
import * as Styled from './components';
import formatMoney from '../utils/formatMoney';
import { getOneProduct } from '../services';

const InformationProduct = ({navigation, route}) => {
  const [informationsProduct, setInformationsProduct] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchShowProduct = async () => {
        const { idProduct } = route.params;
        const { data, message } = await getOneProduct(idProduct);
        const { name, price, description, category, barCode } = data;
  
        setInformationsProduct([
          {label: 'Produto', value: name},
          {label: 'Descrição', value: description},
          {label: 'Categoria', value: category},
          {label: 'Preço', value: formatMoney(price)},
          {label: 'Código de Barras', value: barCode}]);
        setMessage(message);
      }
  
      fetchShowProduct();
  }, []);

  const verifyField = (information) => {
    const { label, value } = information;

    if (label === 'Preço') return 'R$ ' + value;
    return value;
  }

  return <Styled.ScreenShowCards>
    <Styled.Card height="545" width="92%">
      <Styled.Title center={true} height="28" uppercase={true}>
        {informationsProduct.length && informationsProduct[0] && informationsProduct[0].value}
      </Styled.Title>
      <View>
          <Styled.DefaultImage
            height="240" width="90%"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.CardInformations>
            {informationsProduct && informationsProduct.map((information, index) => {
              return <Styled.RowsCardInformations key={index}>
                <Styled.Title height="20">{information.label}</Styled.Title>
                <Styled.DefaultText>{verifyField(information)}</Styled.DefaultText>
              </Styled.RowsCardInformations>
            })}
            {/* <Styled.ContainerShowBuyProducts>
              <Styled.ButtonBuy title="Voltar" color="#00BFFF" onPress={() => navigation.navigate('ShowProducts')}>
                <Styled.TextButton>
                  Comprar
                </Styled.TextButton>
              </Styled.ButtonBuy>
              <Styled.ButtonGoBack title="Voltar" color="#00BFFF" onPress={() => navigation.navigate('ShowProducts')}>
                <Styled.TextButton>
                  Voltar
                </Styled.TextButton>
              </Styled.ButtonGoBack>
            </Styled.ContainerShowBuyProducts> */}
          </Styled.CardInformations>
        </View>
    </Styled.Card>
  </Styled.ScreenShowCards>
}

export default InformationProduct;
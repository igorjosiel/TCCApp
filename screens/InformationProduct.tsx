import React, {useEffect, useState} from 'react';
import { View, Button } from 'react-native';
import * as Styled from './components';
import formatMoney from '../utils/formatMoney';

const InformationProduct = ({navigation, route}) => {
  const [informationsProduct, setInformationsProduct] = useState([]);

  useEffect(() => {
    const { name, price, description, category, barCode } = route.params;
    
    setInformationsProduct([
      {label: 'Produto', value: name},
      {label: 'Descrição', value: description},
      {label: 'Categoria', value: category},
      {label: 'Preço', value: formatMoney(price)},
      {label: 'Código de Barras', value: barCode}]);
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
            <Styled.Button title="Voltar" color="#00BFFF" onPress={() => navigation.navigate('ShowProducts')}>
              <Styled.TextButton>
                Voltar
              </Styled.TextButton>
            </Styled.Button>
          </Styled.CardInformations>
        </View>
    </Styled.Card>
  </Styled.ScreenShowCards>
}


export default InformationProduct;
import React, {useEffect, useState} from 'react';
import { View, Button } from 'react-native';
import * as Styled from './components';
import formatMoney from '../utils/formatMoney';

const InformationProduct = ({navigation, route}) => {
  const [informationsProduct, setInformationsProduct] = useState([]);

  useEffect(() => {
    const { name, price, description, category, barcode } = route.params;
    
    setInformationsProduct([
      {label: 'Produto', value: name},
      {label: 'Descrição', value: description},
      {label: 'Categoria', value: category},
      {label: 'Preço', value: formatMoney(price)},
      {label: 'Código de Barras', value: barcode}]);
  }, []);

  return <Styled.ScreenShowCards>
    <Styled.Card height="545px" width="92%">
      <Styled.Title center={true} height="28px">arroz</Styled.Title>
      <View>
          <Styled.DefaultImage
            height="240px" width="90%"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.CardInformations>
            {informationsProduct && informationsProduct.map((information, index) => {
              return <Styled.RowsCardInformations key={index}>
                <Styled.Title height="20px">{information.label}</Styled.Title>
                <Styled.DefaultText>{information.value}</Styled.DefaultText>
              </Styled.RowsCardInformations>
            })}
            <Styled.ContainerButton>
              <Button title="Voltar" color="#00BFFF"
                onPress={() => navigation.navigate('ShowProducts')}></Button>
            </Styled.ContainerButton>
          </Styled.CardInformations>
        </View>
    </Styled.Card>
  </Styled.ScreenShowCards>
}


export default InformationProduct;
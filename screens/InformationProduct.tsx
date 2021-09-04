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

  return <Styled.StyledScreenShowCards>
    <Styled.StyledCard height="545px" width="92%">
      <Styled.StyledTitle center={true} height="28px">arroz</Styled.StyledTitle>
      <View>
          <Styled.StyledImage
            height="240px" width="90%"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.StyledCardInformations>
            {informationsProduct && informationsProduct.map((information, index) => {
              return <Styled.StyledRowsCardInformations key={index}>
                <Styled.StyledTitle height="20px">{information.label}</Styled.StyledTitle>
                <Styled.StyledText>{information.value}</Styled.StyledText>
              </Styled.StyledRowsCardInformations>
            })}
            <Styled.StyledContainerButton>
              <Button title="Voltar" color="#00BFFF"
                onPress={() => navigation.navigate('ShowProducts')}></Button>
            </Styled.StyledContainerButton>
          </Styled.StyledCardInformations>
        </View>
    </Styled.StyledCard>
  </Styled.StyledScreenShowCards>
}


export default InformationProduct;
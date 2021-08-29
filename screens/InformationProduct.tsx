import React from 'react';
import { View, Button } from 'react-native';
import * as Styled from './components';
import formatMoney from '../utils/formatMoney';

const product = {
  name:"arroz",
  price: "30",
  description:"arroz Tio João",
  category: "food",
  barcode:"47575757585"
};

const informationsProduct = [{label: 'Produto', value: product.name},
                             {label: 'Descrição', value: product.description},
                             {label: 'Categoria', value: product.category},
                             {label: 'Preço', value: formatMoney(product.price)},
                             {label: 'Código de Barras', value: product.barcode}];

const InformationProduct = ({navigation}) => (
  <Styled.StyledScreenShowCards>
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
);


export default InformationProduct;
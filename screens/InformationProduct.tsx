import React from 'react';
import { View } from 'react-native';
import * as Styled from './components';

const product = {
  name:"arroz",
  price: "30",
  description:"arroz Tio João",
  category: "food",
  barcode:"47575757585"
};

const InformationProduct = () => (
  <Styled.StyledScreenShowCards>
    <Styled.StyledCard height="400px" width="92%">
      <Styled.StyledTitle>arroz</Styled.StyledTitle>
      <View>
          <Styled.StyledImage
            height="200px" width="100%"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.StyledCardInformations>
            
          </Styled.StyledCardInformations>
        </View>
    </Styled.StyledCard>
  </Styled.StyledScreenShowCards>
);


export default InformationProduct;
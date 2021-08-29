import React from 'react';
import { View } from 'react-native';
import * as Styled from './components';
import { Card } from 'react-native-elements';

const InformationProduct = () => (
  <Styled.StyledScreenShowCards>
    <Styled.StyledCard height="400px" width="92%">
      <Styled.StyledTitle>arroz</Styled.StyledTitle>
      <View>
          <Styled.StyledImage
            height="200px" width="100%"
            source={require("../assets/images/arroz.jpg")}
          />
          <Styled.StyledText>Levieste</Styled.StyledText>
        </View>
    </Styled.StyledCard>
  </Styled.StyledScreenShowCards>
);

InformationProduct.navigationOptions = {
  title: 'About',
}


export default InformationProduct;
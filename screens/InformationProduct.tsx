import React from 'react';
import { View, Button, Text } from 'react-native';
import * as Styled from './components';
import { Card } from 'react-native-elements';

const InformationProduct = () => (
  <Styled.StyledScreenShowCards>
    <Styled.StyledCard height="400px" width="92%">
      <Styled.StyledTitle>arroz</Styled.StyledTitle>
      <View>
          <Card.Image
            style={{height: '200px', paddingTop: 0}}
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
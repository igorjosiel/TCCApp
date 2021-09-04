import React, {useEffect, useState} from 'react';
import { TextInput, StyleSheet } from 'react-native';
import * as Styled from './components';

const messageOne = "Olá! Desfrute do nosso app. Um aplicativo desenvolvido para você buscar as informações dos produtos que precisa de forma fácil e eficiente."
const messageTwo = "Digite o código de barras ou o nome do produto no campo abaixo ou capture o mesmo com a câmera do seu celular.";

const ReadBarCode = ({navigation}) => {
  return <Styled.ScreenShowCards>
    <Styled.CardHomeScreen disabled={false} height="170px" width="80%">
        <Styled.TextHomeScreen>{messageOne}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.CardHomeScreen height="130px" width="80%">
        <Styled.TextHomeScreen>{messageTwo}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.Input
        // onChangeText={onChangeNumber}
        // value=
        placeholder="Digite aqui..."
      />
  </Styled.ScreenShowCards>
}

export default ReadBarCode;
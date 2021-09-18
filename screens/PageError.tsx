import React from 'react';
import * as Styled from './components';

const messageModal = "Por favor, digite o código de barras ou o nome do produto!";

const PageError = ({navigation}) => {

  return <Styled.ScreenShowCards>
    <Styled.CardHomeScreen disabled={false} height={200} width="80%" style={{marginTop: '50%'}}>
      <Styled.IconButton style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '15%'}} name="exclamation" size={50} color="black" />
      <Styled.TextHomeScreen>{messageModal}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => navigation.navigate('ReadBarCode')}>
        <Styled.TextButton>
            Voltar
        </Styled.TextButton>
    </Styled.Button>
  </Styled.ScreenShowCards>
}

export default PageError;
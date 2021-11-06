import React, { useState, useEffect } from 'react';
import * as Styled from './components';

const PageError = ({navigation, route}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(route.params.message);
  });

  return <Styled.ScreenShowCards>
    <Styled.CardHomeScreen disabled={false} height={200} width="80%" marginTop='50%'>
      <Styled.IconButton marginTop='15%' name="exclamation" size={50} color="black" marginLeft="auto" marginRight="auto" />
      <Styled.TextHomeScreen>{message}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => navigation.navigate('ReadBarCode')}>
        <Styled.TextButton>
            Voltar
        </Styled.TextButton>
    </Styled.Button>
  </Styled.ScreenShowCards>
}

export default PageError;
import React, { useState, useEffect } from 'react';
import * as Styled from './components';
import { useSelector } from 'react-redux';

const PageList = ({navigation, route}) => {
  const [message, setMessage] = useState('');
  const { list } = useSelector((state) => state);

  useEffect(() => {
    setMessage(list.message);
  });

  return <Styled.ScreenShowCards>
    <Styled.CardHomeScreen disabled={false} height={200} width="80%" marginTop='50%'>
      <Styled.IconButton marginTop='15%' name="check" size={50} color="black" marginLeft="auto" marginRight="auto" />
      <Styled.TextHomeScreen>{message}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.Button title="Voltar" color="#00BFFF" onPress={() => navigation.navigate('ListProducts')}>
        <Styled.TextButton>
            Voltar
        </Styled.TextButton>
    </Styled.Button>
  </Styled.ScreenShowCards>
}

export default PageList;
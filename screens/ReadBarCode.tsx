import React, {useEffect, useState} from 'react';
import * as Styled from './components';
import OpenCamera from './OpenCamera';

const messageOne = "Olá! Desfrute do nosso app. Um aplicativo desenvolvido para você buscar as informações dos produtos que precisa de forma fácil e eficiente."
const messageTwo = "Digite o código de barras ou o nome do produto no campo abaixo ou capture o mesmo com a câmera do seu celular.";

const ReadBarCode = ({navigation}) => {
  const [search, setSearch] = useState('');

  const onpenCamera = () => {
    return <OpenCamera></OpenCamera>
  }

  return <Styled.ScreenShowCards>
    <Styled.CardHomeScreen disabled={false} height={170} width="80%">
        <Styled.TextHomeScreen>{messageOne}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.CardHomeScreen height={130} width="80%">
        <Styled.TextHomeScreen>{messageTwo}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen>
    <Styled.Input
        onChangeText={(text) => setSearch(text)}
        value={search}
        maxLength={!isNaN(search) ? 13 : 25}
        placeholder="Digite aqui..."
      />
    <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => console.log("Search: ", search)}>
        <Styled.TextButton>
            <Styled.IconButton name="search" size={15} color="black" />
            Pesquisar
        </Styled.TextButton>
    </Styled.Button>
    <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => onpenCamera()}>
        <Styled.TextButton>
            <Styled.IconButton name="camera" size={15} color="black" />
            Ligar a câmera
        </Styled.TextButton>
    </Styled.Button>
  </Styled.ScreenShowCards>
}

export default ReadBarCode;
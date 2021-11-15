import React, {useState, useEffect} from 'react';
import * as Styled from './components';

const messageOne = "Olá! Desfrute do nosso app. Um aplicativo desenvolvido para você buscar as informações dos produtos que precisa de forma fácil e eficiente."
const messageTwo = "Digite o código de barras ou o nome do produto no campo abaixo ou capture o mesmo com a câmera do seu celular.";
const messageModal = "Por favor, digite o código de barras ou o nome do produto!";

const ReadBarCode = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [showCards, setShowCards] = useState(true);

  useEffect(() => {
    if(search === "") setShowCards(true);
  }, [search]);

  const searchBarCode = () => {
    if(search.length > 0) navigation.navigate('ShowProducts', { value: search, typeSearch: 'name' });
    else navigation.navigate('PageError', { message: "Por favor, digite o código de barras ou o nome do produto!" });
  }

  const onpenCamera = () => {
    navigation.navigate('OpenCamera');
  }

  const changeSearch = (text) => {
    setShowCards(false);
    setSearch(text);
  }

  return <Styled.ScreenShowCards paddingTop="0%">
    {showCards ?
    <Styled.CardHomeScreen disabled={false} height={170} width="80%">
        <Styled.TextHomeScreen>{messageOne}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen> : showCards}
    {showCards ?
    <Styled.CardHomeScreen height={130} width="80%">
        <Styled.TextHomeScreen>{messageTwo}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen> : showCards}
    <Styled.Input
        onChangeText={(text) => changeSearch(text)}
        value={search}
        maxLength={!isNaN(search) ? 13 : 25}
        placeholder="Digite aqui..."
      />
      <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => searchBarCode()}>
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
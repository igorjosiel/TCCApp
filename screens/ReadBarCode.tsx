import React, {useState, useEffect} from 'react';
import * as Styled from './components';
import ModalInformation from './ModalInformation';

const messageOne = "Olá! Desfrute do nosso app. Um aplicativo desenvolvido para você buscar as informações dos produtos que precisa de forma fácil e eficiente."
const messageTwo = "Digite o código de barras ou o nome do produto no campo abaixo ou capture o mesmo com a câmera do seu celular.";
const messageModal = "Por favor, digite o código de barras ou o nome do produto!";

const ReadBarCode = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const searchBarCode = () => {
    if(search.length > 0) navigation.navigate('ShowProducts', search);
    else setModalVisible(true);
  }

  const onpenCamera = () => {
    navigation.navigate('OpenCamera');
  }

  return <Styled.ScreenShowCards>
    {console.log("Foi: ", modalVisible)}
    {modalVisible ? <ModalInformation
      openModal={modalVisible}
      closeModal={() => setModalVisible(!modalVisible)}
      message={messageModal}
    /> : null}
    {!modalVisible ? 
    <Styled.CardHomeScreen disabled={false} height={170} width="80%">
        <Styled.TextHomeScreen>{messageOne}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen> : null}
    {!modalVisible ?
    <Styled.CardHomeScreen height={130} width="80%">
        <Styled.TextHomeScreen>{messageTwo}</Styled.TextHomeScreen>
    </Styled.CardHomeScreen> : null}
    {!modalVisible ? <Styled.Input
        onChangeText={(text) => setSearch(text)}
        value={search}
        maxLength={!isNaN(search) ? 13 : 25}
        placeholder="Digite aqui..."
      /> : null}
      {!modalVisible ?
      <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => searchBarCode()}>
        <Styled.TextButton>
            <Styled.IconButton name="search" size={15} color="black" />
            Pesquisar
        </Styled.TextButton>
    </Styled.Button> : null}
    {!modalVisible ?
    <Styled.Button title="Pesquisar" color="#00BFFF" onPress={() => onpenCamera()}>
        <Styled.TextButton>
            <Styled.IconButton name="camera" size={15} color="black" />
            Ligar a câmera
        </Styled.TextButton>
    </Styled.Button> : null}
  </Styled.ScreenShowCards>
}

export default ReadBarCode;
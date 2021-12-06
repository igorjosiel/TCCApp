import React, { useState, useEffect } from 'react';
// import { View } from '../components/Themed';
import * as Styled from './components';
// import { listProducts } from '../services';

export default function ShowProducts({ navigation, route }) {
  const [newProduct, setNewProduct] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState();

//   useEffect(() => {
//     const { value, typeSearch } = route.params;

//     const fetchSearchProducts = () => {
//       setTimeout(async() => {
//         const { data, message } = await listProducts(value, typeSearch);

//         setLoading(false);

//         if (data && data.length === 0) {
//           return navigation.navigate('PageError', { message: "Produto não cadastrado no sistema. Por favor procure por outro!", icon: 'exclamation' });
//         }

//         setMessage(message);
//         setProducts(data);
        
//       }, 1000);
//     }

//     fetchSearchProducts();
//   }, []);

const changeSearch = (text) => {
  setNewProduct(text);
}

  return (
    <Styled.ScreenShowCards>
      {/* {loading ?
        <Styled.ContainerLoading>
          <Styled.Loading size="large" color="rgb(70, 48, 235)" />
        </Styled.ContainerLoading> :
      null} */}
      <Styled.Input
        onChangeText={(text) => changeSearch(text)}
        value={newProduct}
        // maxLength={!isNaN(search) ? 13 : 25}
        placeholder="Digite aqui o novo produto..."
      />
      <Styled.Button title="InserirLista" color="#00BFFF" onPress={() => console.log('Foiii...')}>
        <Styled.TextButton>
          <Styled.IconButton name="list" size={15} color="black" />
          Inserir na Lista
        </Styled.TextButton>
      </Styled.Button>

      {/* <Styled.Scroll centerContent={true} showsVerticalScrollIndicator={false}>
      {products && products.map((product, index) => {
        return (<Styled.Card key={index} height={170} width="92%" marginLeft="15" onPress={() => navigation.navigate('InformationProduct', product)}>
          <Styled.Title uppercase={true} center={true} height="20">{product.name}</Styled.Title>
          <View>
            <Styled.DefaultImage
              height={120}
              width="100%"
              source={require("../assets/images/arroz.jpg")}
            />
            <Styled.DefaultText>{product.description}</Styled.DefaultText>
          </View>
          </Styled.Card>
        );
      })
    }
    </Styled.Scroll> */}
    </Styled.ScreenShowCards>
  );
}
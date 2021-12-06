import React, { useState, useEffect } from 'react';
// import { View } from '../components/Themed';
import * as Styled from './components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProductList } from '../store/list';
// import { listProducts } from '../services';

export default function ListProducts({ navigation, route }) {
  const dispatch = useDispatch();
  const { list, message } = useSelector((state) => state.list);
  
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

const insertProduct = () => {
  dispatch(addProductList({ description: newProduct }));
  setNewProduct('');

  navigation.navigate('PageList');
}

const clearWholeList = () => {
  navigation.navigate('PageError',
  {
    message: 'Tem certeza de que deseja limpar a lista?',
    icon: 'interrogation',
    removeProduct: '4'
  });
}

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
        placeholder="Digite aqui o novo produto..."
      />
      <Styled.Button title="InserirLista" color="#00BFFF" onPress={() => insertProduct()}>
        <Styled.TextButton>
          <Styled.IconButton name="list" size={15} color="black" />
          Inserir na Lista
        </Styled.TextButton>
      </Styled.Button>

      <Styled.Scroll centerContent={true} showsVerticalScrollIndicator={false}>
      {list && list.map((product, index) => {
        return (<Styled.Card key={index} height={90} width="92%" marginLeft="15" onPress={() => console.log('Foiii')}>
            <Styled.Title uppercase={true} center={true} height="20">{product.description}</Styled.Title>
            <Styled.ButtonDeleteProduct
              title="Remover"
              background="orange"
              // onPress={() => clearWholeList()}
            >
              <Styled.TextButton>
                Remover da Lista
              </Styled.TextButton>
            </Styled.ButtonDeleteProduct>
          </Styled.Card>
        );
      })
    }
    {list && list.length > 0 ?
    <>
      <Styled.ButtonDeleteProduct
        title="Remover"
        background="#FF6347"
        onPress={() => clearWholeList()}
      >
        <Styled.TextButton>
          Limpar a Lista
        </Styled.TextButton>
      </Styled.ButtonDeleteProduct>
    </>: null}
    </Styled.Scroll>
    </Styled.ScreenShowCards>
  );
}
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const products = [{
    name:"arroz",
    price: "30",
    description:"arroz Tio João",
    category: "food",
    barcode:"47575757585"
},{
  name:"arroz",
  price: "30",
  description:"arroz Tio João",
  category: "food",
  barcode:"47575757585"
},{
  name:"arroz",
  price: "30",
  description:"arroz Tio João",
  category: "food",
  barcode:"47575757585"
}];

  return (
    <View>
      {
    products && products.map((product, index) => {
      return (<Card>
        <Card.Title>{product.name}</Card.Title>
        <Card.Divider/>
        <View key={index}>
          <Card.Image
            // style={styles.image}
            // resizeMode="cover"
            source={require("../assets/images/arroz.jpg")}
          />
          <Text>{product.description}</Text>
        </View>
        </Card>
      );
    })
  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ''
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

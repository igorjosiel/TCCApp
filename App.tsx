import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowProducts from './screens/ShowProducts';
import InformationProduct from './screens/InformationProduct';
import ReadBarCode from './screens/ReadBarCode';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ReadBarCode" component={ReadBarCode} />
        <Stack.Screen name="ShowProducts" component={ShowProducts} />
        <Stack.Screen name="InformationProduct" component={InformationProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
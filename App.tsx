import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadBarCodeNavigator, ShoppingCartNavigator, ListProducts } from './CustomNavigation';
import Icon from "react-native-vector-icons/AntDesign";
import { Provider } from 'react-redux';
import { store } from './store/store';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            // headerStyle: { backgroundColor: 'rgb(135, 206, 235)' }
          }}
          tabBarOptions={{
            labelStyle: {fontSize: 15},
            activeTintColor: '#000000',
            inactiveTintColor: '#808080',
            activeBackgroundColor: '#FFFAFA',
            inactiveBackgroundColor: '#FFFAFA',
          }}>
          <Tab.Screen name={"Home"} component={ReadBarCodeNavigator} />
          <Tab.Screen name={"Lista"} component={ListProducts} />
          <Tab.Screen name={"Carrinho"} component={ShoppingCartNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider >
  );
};

export default App;
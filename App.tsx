import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadBarCodeNavigator, ShoppingCartNavigator, ListProducts } from './CustomNavigation';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Ionicons } from '@expo/vector-icons';

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
          <Tab.Screen name="Pesquisar" component={ReadBarCodeNavigator} options={{
            tabBarIcon: () => <Ionicons name="search" size={25} />
          }} />
          <Tab.Screen name="Lista" component={ListProducts} options={{
            tabBarIcon: () => <Ionicons name="list" size={25} />
          }} />
          <Tab.Screen name="Carrinho" component={ShoppingCartNavigator} options={{
            tabBarIcon: () => <Ionicons name="cart" size={25} />
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider >
  );
};

export default App;
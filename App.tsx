import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadBarCodeNavigator, ShoppingCartNavigator } from './CustomNavigation';
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBarOptions={{
            labelStyle: {fontSize: 15},
            activeTintColor: '#000000',
            inactiveTintColor: '#808080',
            activeBackgroundColor: '#FFFAFA',
            inactiveBackgroundColor: '#FFFAFA',
          }}>
          <Tab.Screen name={"Home"} component={ReadBarCodeNavigator} />
          <Tab.Screen name={"Carrinho"} component={ShoppingCartNavigator} />
          {/* <Tab.Screen name={"Promoções"} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ShowProducts from './screens/ShowProducts';
import InformationProduct from './screens/InformationProduct';
import ReadBarCode from './screens/ReadBarCode';
import OpenCamera from './screens/OpenCamera';
import PageError from './screens/PageError';
import ShoppingCart from './screens/ShoppingCar';
import BuyProduct from './screens/BuyProduct';
import PageBought from './screens/PageBought';
import PageList from './screens/PageList';
import List from './screens/List';

const Stack = createStackNavigator();

const ReadBarCodeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="ReadBarCode"
                component={ReadBarCode}
            />
            <Stack.Screen
                name="BuyProduct"
                component={BuyProduct}/>
            <Stack.Screen
                name="ShowProducts"
                component={ShowProducts}
            />
            <Stack.Screen
                name="OpenCamera"
                component={OpenCamera}
            />
            <Stack.Screen
                name="PageError"
                component={PageError}
            />
            <Stack.Screen
                name="PageBought"
                component={PageBought}
            />
            <Stack.Screen
                name="InformationProduct"
                component={InformationProduct}
            />
        </Stack.Navigator>
    )
}

export {ReadBarCodeNavigator}

const ShoppingCartNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="ShoppingCart"
                component={ShoppingCart}
            />
        </Stack.Navigator>
    )
}

export {ShoppingCartNavigator}

const ListProducts = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
        }}>
            <Stack.Screen
                name="ListProducts"
                component={List}
            />
            <Stack.Screen
                name="PageList"
                component={PageList}
            />
        </Stack.Navigator>
    )
}

export {ListProducts}
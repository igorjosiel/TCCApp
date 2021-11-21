import styled from 'styled-components/native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity, TextInput, Image, Pressable, ScrollView } from "react-native";
import { FontAwesome } from 'react-native-vector-icons';
import { ActivityIndicator } from 'react-native';

const background = "#FFF";
const defaultCard = `
    background-color: ${background};
    border-color: rgba(0, 0, 0, 0.12);
    border-width: 1;
    margin-top: 10;
    border-radius: 6;
`;

export const Card = styled(TouchableOpacity)`
    ${defaultCard};
    margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
    margin-bottom: 5;
    height: ${props => props.height ? props.height : 150};
    width: ${props => props.width ? props.width : 150};
`;

export const CardHomeScreen = styled(View)`
    ${defaultCard};
    height: ${props => props.height ? props.height : 150};
    width: ${props => props.width ? props.width : 150};
    margin-top: ${props => props.marginTop ? props.marginTop : 40};
`;

export const IconButton = styled(FontAwesome)`
    margin-left: ${props => props.marginLeft ? props.marginLeft : '3'};
    margin-right: ${props => props.marginRight ? props.marginRight : '10'};
    margin-top: ${props => props.marginTop ? props.marginTop : 0};
`;

export const ScreenShowCards = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${props => props.paddingTop ? props.paddingTop : '3%'};
    background: #87CEEB;
    height: 100%;
`;

export const Button = styled(Pressable)`
    width: 70%;
    height: 40;
    background: #00BFFF;
    border-radius: 10;
    text-align: center;
    margin-top: 15;
    margin-left: auto;
    margin-right: auto;
`;

export const ButtonGoBack = styled(Button)`
    width: 40% !important;
    margin-left: 0px;
    margin-right: 0px;
`;

export const ButtonBuy = styled(ButtonGoBack)`
    width: 50% !important;
    opacity: ${props => props.disabled ? '0.3' : '1.0'};
`;

export const ButtonSymbols = styled(Button)`
    width: 30% !important;
    height: 25;
    opacity: ${props => props.disabled ? '0.3' : '1.0'};
`;

export const ContainerSymbols = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    border-radius: 180px;
    width: 50% !important;
`;

export const TextButton = styled(Text)`
    color: black;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    font-size: 16;
`;

export const TextButtonSymbol = styled(TextButton)`
    font-size: 18;
    font-weight: unset;
    font-weight: unset;
    margin-bottom: 0px;
`;

export const Input = styled(TextInput)`
    height: 40;
    width: 70%;
    border-width: 1;
    background-color: white;
    margin-top: 30;
`;

export const Title = styled(Text)`
    color: rgb(67, 72, 77);
    background-color: ${background};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'capitalize'};
    font-size: 14;
    font-weight: bold;
    margin-top: 3;
    height: ${props => props.height ? props.height : 150};
    text-align: ${props => props.center ? 'center' : 'left'};
`;

export const DefaultText = styled(Text)`
    text-align: center;
    font-size: 16;
    background-color: ${background};
    margin-top: 3;
`;

export const TextAmountProduct = styled(DefaultText)`
    font-size: 18;
`;

export const TextHomeScreen = styled(DefaultText)`
    margin-top: auto;
    margin-bottom: auto;
    font-weight: bold;
`;

export const DefaultImage = styled(Image)`
    height: ${props => props.height ? props.height : 150};
    width: ${props => props.width ? props.width : 150};
    margin-left: auto;
    margin-right: auto;
`;

export const CardInformations = styled(View)`
    margin-left: auto;
    margin-right: auto;
    margin-top: 15;
    width: 90%;
    height: 200;
`;

export const RowsCardInformations = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10;
`;

export const ContainerButton = styled(View)`
    margin-top: 22;
`;

export const Scroll = styled(ScrollView)`
    width: 100%;
`;

export const ContainerLoading = styled(View)`
    width: 100%;
    height: 100%;
    background-color: rgb(135, 206, 235);
`;

export const Loading = styled(ActivityIndicator)`
    width: 100%;
    height: 100%;
`;

export const ContainerShowBuyProducts = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const CardProductBought = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const FontProductBought = styled(Text)`
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: 16px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ButtonDeleteProduct = styled(ButtonBuy)`
    alignSelf: end;
    margin-right: 20px;
    backgroundColor: #FF6347;
`;
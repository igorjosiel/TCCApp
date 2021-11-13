import styled from 'styled-components/native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity, TextInput, Image, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

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

export const IconButton = styled(Icon)`
    margin-left: ${props => props.marginLeft ? props.marginLeft : '3'};
    margin-right: ${props => props.marginRight ? props.marginRight : '10'};
    margin-top: ${props => props.marginTop ? props.marginTop : 0};
`;

export const ScreenShowCards = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const TextButton = styled(Text)`
    color: black;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    font-size: 16;
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
    text-transform: ${props => props.uppercase ? 'uppercase' : ''};
    font-size: 14;
    font-weight: bold;
    margin-top: 3;
    height: ${props => props.height ? props.height : 150};
    text-align: ${props => props.center ? 'center' : 'left'};
`;

export const DefaultText = styled(Text)`
    text-align: center;
    font-size: 14;
    background-color: ${background};
    margin-top: 3;
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
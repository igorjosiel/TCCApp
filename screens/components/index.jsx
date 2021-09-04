import styled from 'styled-components/native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity, TextInput, Image, Pressable } from "react-native";

const background = "#FFF";
const defaultCard = `
    background-color: ${background};
    border-color: rgba(0, 0, 0, 0.12);
    border-width: 1px;
    box-shadow: rgb(0, 0, 0 / 20%) 0px 0px 1px;
    margin-top: 15px;
    border-radius: 6px;
`;

export const Card = styled(TouchableOpacity)`
    ${defaultCard};
    height: ${props => props.height};
    width: ${props => props.width};
`;

export const CardHomeScreen = styled(View)`
    ${defaultCard};
    height: ${props => props.height};
    width: ${props => props.width};
    margin-top: 20px !important;
`;

export const ScreenShowCards = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #87CEEB;
    height: 100%;
`;

export const Button = styled(Pressable)`
    width: 80%;
    height: 30;
    background: #00BFFF;
    border-radius: 5;
    text-align: center;
    margin-top: 15;
`;

export const TextButton = styled(Text)`
    color: white;
    text-transform: uppercase;
    margin-top: auto;
    margin-bottom: auto;
    font-weight: bold;
`;

export const Input = styled(TextInput)`
    height: 30;
    width: 80%;
    border-width: 1;
    background-color: white;
    margin-top: 30;
`;

export const Title = styled(Text)`
    color: rgb(67, 72, 77);
    background-color: ${background};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    margin-top: 3px;
    height: ${props => props.height};
    text-align: ${props => props.center ? 'center' : 'start'};
`;

export const DefaultText = styled(Text)`
    text-align: center;
    font-size: 14px;
    background-color: ${background};
    margin-top: 3px;
`;

export const TextHomeScreen = styled(DefaultText)`
    margin-top: auto;
    margin-bottom: auto;
    font-weight: bold;
`;

export const DefaultImage = styled(Image)`
    height: ${props => props.height};
    width: ${props => props.width};
    margin-left: auto;
    margin-right: auto;
`;

export const CardInformations = styled(View)`
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    width: 90%;
    height: 200px;
`;

export const RowsCardInformations = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const ContainerButton = styled(View)`
    margin-top: 22px;
`;
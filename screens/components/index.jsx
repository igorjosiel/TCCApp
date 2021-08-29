import styled from 'styled-components/native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity, Button } from "react-native";
import { Image } from 'react-native';


const background = "#FFF";

export const StyledCard = styled(TouchableOpacity)`
    background-color: ${background};
    border-color: rgba(0, 0, 0, 0.12);
    border-width: 1px;
    box-shadow: rgb(0, 0, 0 / 20%) 0px 0px 1px;
    height: ${props => props.height};
    margin-top: 15px;
    border-radius: 6px;
    width: ${props => props.width};
`;

export const StyledScreenShowCards = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #87CEEB;
    height: 100%;
`;

export const StyledTitle = styled(Text)`
    color: rgb(67, 72, 77);
    background-color: ${background};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    margin-top: 4px;
    height: 20px;
    text-align: ${props => props.center ? 'center' : 'start'};
`;

export const StyledText = styled(Text)`
    text-align: center;
    font-size: 14px;
    background-color: ${background};
    margin-top: 3px;
`;

export const StyledImage = styled(Image)`
    height: ${props => props.height};
    width: ${props => props.width};
`;

export const StyledCardInformations = styled(View)`
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    width: 90%;
    height: 200px;
`;

export const StyledRowsCardInformations = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const StyledContainerButton = styled(View)`
    margin-top: 22px;
`;
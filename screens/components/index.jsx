import styled from 'styled-components/native';
import { Text, View } from '../../components/Themed';

const background = "#FFF";

export const StyledCard = styled(View)`
    background-color: ${background};
    border-color: rgba(0, 0, 0, 0.12);
    border-width: 1px;
    box-shadow: rgb(0, 0, 0 / 20%) 0px 0px 1px;
    height: ${props => props.height};
    margin-top: 15px;
    border-radius: 5px;
    width: ${props => props.width};
`;

export const StyledScreenShowCards = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #87CEEB;
`;

export const StyledTitle = styled(Text)`
    color: rgb(67, 72, 77);
    background-color: ${background};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    margin-top: 3px;
    height: 20px;
    text-align: center;
`;

export const StyledText = styled(Text)`
    text-align: center;
    font-size: 14px;
    background-color: ${background};
    margin-top: 5px;
`;
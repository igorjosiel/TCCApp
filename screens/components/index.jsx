import styled from 'styled-components/native';
import { View } from '../../components/Themed';

export const StyledCard = styled(View)`
    background-color: #F0FFFF;
    border-color: rgb(255, 232, 238);
    border-width: 1px;
    box-shadow: rgb(0, 0, 0 / 20%) 0px 0px 1px;
    height: 150px;
    margin-top: 10px;
    border-radius: 10px;
    width: 95%;
`;

export const StyledScreenShowCards = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledTitle = styled(View)`
    color: rgb(67, 72, 77);
    background-color: #F0FFFF;
    font-size: 14.1px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
`;
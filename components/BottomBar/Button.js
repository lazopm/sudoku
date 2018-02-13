import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    border-radius: 5;
    background: #fffaf2;
    border-bottom-width: 4;
    border-right-width: 4;
    border-style: solid;
    border-color: #f5c271;
    width: 40;
    height: 40;
`;

const ButtonText = styled.Text`
    color: #76D7C4;
    padding-top: 1;
    padding-left: 11;
    font-size: 25;
    font-weight: bold;
`;

const NumberButton = ({text, handler}) => (
    <Container onPress={handler}>
        <ButtonText>{text}</ButtonText>
    </Container>
);

export default NumberButton;

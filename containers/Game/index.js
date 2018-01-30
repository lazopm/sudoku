import React from 'react';
import styled from "styled-components/native";
import Board from '../../components/Board';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';

const Container = styled.View`
    flex: 1;
    background-color: pink;
    justify-content: center;
`;

const Game = () => ( 
    <Container>
        <TopBar/>
        <Board/>
        <BottomBar/>
    </Container>
);

export default Game;

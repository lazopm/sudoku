import React from 'react';
import styled from "styled-components/native";
import { StatusBar } from 'react-native';
import Board from './components/Board';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import createStore from './store';
import { Provider } from 'react-redux';

const Container = styled.View`
    flex: 1;
    background-color: pink;
    justify-content: center;
`;

const App = () => ( 
    <Provider store={createStore()}>
        <Container>
            <StatusBar hidden />
            <TopBar/>
            <Board/>
            <BottomBar/>
        </Container>
    </Provider>
);

export default App;

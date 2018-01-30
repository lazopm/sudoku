import React from 'react';
import { connect } from 'react-redux';
import { newGame } from '../../store/actions'; 
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
`;

const Option = styled.Button`
`;

const Menu = ({ history, newGame }) => ( 
    <Container>
        <Option title="New Game" onPress={() => {
            newGame();
            history.push('/game');
        }}/>
    </Container>
);

const mapDispatchToProps = { newGame };
export default connect(null, mapDispatchToProps)(Menu);

import React from 'react';
import { connect } from 'react-redux';
import { undo } from '../../store/actions';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    border-radius: 5;
    background: white;
    border-bottom-width: 4;
    border-right-width: 4;
    border-style: solid;
    border-color: #f5c271;
    height: 48;
    padding-left: 8;
    padding-right: 8;
`;

const ButtonText = styled.Text`
    color: #76D7C4;
    padding-top: 1;
    text-align: center;
    font-size: 30;
    font-weight: bold;
`;

const UndoButton = ({ text, undo, hasPlays }) => hasPlays ? (
    <Container onPress={undo}>
        <ButtonText>UNDO</ButtonText>
    </Container>
) : null;

const mapStateToProps = state => ({
    hasPlays: state.game.plays.length > 0,
});

export default connect(mapStateToProps, { undo })(UndoButton);

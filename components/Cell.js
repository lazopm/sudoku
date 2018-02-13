import React from 'react';
import { connect } from 'react-redux';
import { select } from '../store/actions';
import styled from 'styled-components/native';

const Container = styled.View`
    height: 40;
    width: 40;
    border-style: solid;
    border-width: 1;
    border-color: #ddd;
`;

const Number = styled.TouchableOpacity`
    ${props => !props.playable && `
        background: #eee;
    `}
    ${props => props.selected && `
        background-color: papayawhip;
    `}
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const NumberText = styled.Text`
    color: #555;
    ${props => !props.playable && `
        color: #111;
    `}
    font-weight: bold;
    font-size: 20;
`;

const Cell = ({ value, select, isSelected, position, isPlayable }) => (
    <Container>
        <Number
            playable={isPlayable}
            selected={isSelected}
            onPress={() => select(position)}
        >
            <NumberText
                playable={isPlayable}
            >
                {value}
            </NumberText>
        </Number>
    </Container>
);

const mapStateToProps = (state, { position }) => {
    const value = state.game.board[position];
    return {
        value,
        isPlayable: value === null,
        isSelected: state.game.selected === position,
    };
};

export default connect(mapStateToProps, { select })(Cell);

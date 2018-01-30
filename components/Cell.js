import React from 'react';
import { connect } from 'react-redux';
import { selectCell } from '../store/actions';
import styled from 'styled-components/native';

const Container = styled.View`
    height: 40;
    width: 40;
    border-style: solid;
    border-top-width: 2;
    border-left-width: 2;
    border-color: #ccc;
    ${props => props.topEdge && `
        border-top-width: 0;
    `}
    ${props => props.leftEdge && `
        border-left-width: 0;
    `}
`;

const Number = styled.TouchableOpacity`
    ${props => props.selected && `
        background-color: papayawhip;
    `}
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const NumberText = styled.Text`
    color: #111;
    font-weight: bold;
    font-size: 20;
`;

const Cell = ({ num, x, y, selected, selectCell, ...restProps }) => (
    <Container {...restProps}>
        <Number selected={selected} onPress={() => {
            selectCell(x, y);
        }}>
            <NumberText>{num}</NumberText>
        </Number>
    </Container>
);

const mapDispatchToProps = { selectCell }; 
export default connect(null, mapDispatchToProps)(Cell);

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { range } from '../util';

const Container = styled.View`
    background: papayawhip;
    height: 140;
    padding-left: 10;
    padding-right: 10;
`;

const Inner = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`;

const Number = styled.Text`
    color: #76D7C4;
    font-size: 40;
    font-weight: bold;
`;

const BottomBar = ({ undo }) => (
    <Container>
        <Inner>
            {range(1, 10).map(num => (
                <Number key={num}>{num}</Number>
            ))}
        </Inner>
    </Container>
);

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(BottomBar);

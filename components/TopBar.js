import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const Container = styled.View`
    padding-top: 10;
    padding-right: 10;
    padding-left: 10;
    background: papayawhip;
    height: 100;
`;

const Inner = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

const Controls = styled.View`
    flex 1;
`;

const Time = styled.Text`
    padding-top: 10;
    color: #76D7C4;
    font-size: 60;
    font-weight: bold;
`;

const TopBar = ({ undo }) => (
    <Container>
        <Inner>
            <Controls></Controls>
            <Time>00:35</Time>
        </Inner>
    </Container>
);

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(TopBar);

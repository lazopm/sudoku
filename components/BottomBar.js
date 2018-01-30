import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const Container = styled.View`
    background: papayawhip;
    height: 140;
`;

const BottomBar = ({ undo }) => (
    <Container>
    </Container>
);

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(BottomBar);

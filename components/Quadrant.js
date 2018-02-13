import React from 'react';
import styled from 'styled-components/native';
import Cell from '../components/Cell';

const Container = styled.View`
    border-style: solid;
    border-top-width: 2;
    border-left-width: 2;
    border-color: #888;
    background-color: white;
    ${props => props.topLeftCell < 9 && 'border-top-width: 0;'}
    ${props => props.topLeftCell % 9 === 0 && 'border-left-width: 0;'}
`;

const Row = styled.View`
    flex-direction: row;
`;

const Quadrant = ({ matrix }) => (
    <Container topLeftCell={matrix[0][0]}>
        {matrix.map((cells, i)=> (
            <Row key={i}>
                {cells.map((x, i) => (
                    <Cell key={i} position={x}/>
                ))}
            </Row>
        ))}
    </Container>
);

export default Quadrant;

import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import chunk from 'lodash/fp/chunk';
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import range from 'lodash/fp/range';
import Quadrant from '../components/Quadrant';

const Container = styled.View`
    flex: 4;
    justify-content: center;
    align-items: center;
`;

const QuadrantRow = styled.View`
    flex-direction: row;
`;

const Quadrants = styled.View`
    border-width: 3;
    border-radius: 4;
    border-style: solid;
    border-color: #333;
`;

const matrix = compose( 
    map(chunks => chunks.reduce((mem, row, i) => {
        mem[i % 3].push(row);
        return mem;
    }, [[],[],[]])),
    map(chunk(3)),
    chunk(27),
    range(0),
)(81);
const Board = () => {
    return (
        <Container>
            <Quadrants>
                {matrix.map((quadrants, i) => (
                    <QuadrantRow key={i}>
                        {quadrants.map((quadrant, i) => (
                            <Quadrant key={i} matrix={quadrant}/>
                        ))}
                    </QuadrantRow>
                ))}
            </Quadrants>
        </Container>
    );
};


export default Board;

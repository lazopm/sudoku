import React from 'react';
import styled from 'styled-components/native';
import Cell from './Cell';

const Container = styled.View`
    border-style: solid;
    border-top-width: 2;
    border-left-width: 2;
    border-color: #888;
    background-color: white;
    ${props => props.topEdge && `
        border-top-width: 0;
    `}
    ${props => props.leftEdge && `
        border-left-width: 0;
    `}
`;

const Row = styled.View`
    flex-direction: row;
`;

const Quadrant = ({ matrix, startingX, startingY, selectedCell, ...restProps }) => (
    <Container {...restProps}>
        {matrix.map((row, y) => (
            <Row key={`row${y}`}>
                {row.map((n, x) => {
                    const cellX = startingX + x;
                    const cellY = startingY + y;
                    return (
                        <Cell
                            key={`sq${x}`}
                            text={n}
                            leftEdge={x === 0}
                            topEdge={y === 0}
                            x={cellX}
                            y={cellY}
                            selected={
                                selectedCell
                                && cellX === selectedCell[0]
                                && cellY === selectedCell[1]
                            }
                        />
                    );
                })}
            </Row>
        ))}
    </Container>
);

export default Quadrant;

import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { getQuadrant, range } from '../util'; 
import Quadrant from '../components/Quadrant';

const board = new Array(9)
    .fill(null)
    .map(() => new Array(9).fill(null));

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

const Board = ({ boardMatrix, selectedCell }) => (
    <Container>
        <Quadrants>
            {range(0, 3).map(y => (
                <QuadrantRow key={`row${y}`}>
                    {range(0, 3).map(x => (
                        <Quadrant
                            key={`quadrant${x}`}
                            topEdge={y === 0}
                            leftEdge={x === 0}
                            startingX={x * 3}
                            startingY={y * 3}
                            matrix={getQuadrant(boardMatrix, x, y)}
                            selectedCell={selectedCell}
                        />
                    ))}
                </QuadrantRow>
            ))}
        </Quadrants>
    </Container>
);

const mapStateToProps = ({ game }) => ({
    boardMatrix: game.board,
    selectedCell: game.selected,
});

export default connect(mapStateToProps)(Board);

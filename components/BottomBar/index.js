import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import range from 'lodash/fp/range';
import { play } from '../../store/actions';
import Button from './Button';

const Container = styled.View`
    background: papayawhip;
    height: 110;
    padding-top: 10;
    padding-left: 10;
    padding-right: 10;
`;

const Row = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`;

const BottomBar = ({ undo, play, selected }) => (
    <Container>
        <Row>
            {range(1, 6).map(num => (
                <Button
                    key={num}
                    text={num}
                    handler={() => {
                        if (typeof(selected) === 'number')
                            play(selected, num);
                    }}
                />
            ))}
        </Row>
        <Row>
            {range(6, 10).map(num => (
                <Button
                    key={num}
                    text={num}
                    handler={() => {
                        if (typeof(selected) === 'number')
                            play(selected, num);
                    }}
                />
            ))}
            <Button
                text="X"
                handler={() => {
                    if (typeof(selected) === 'number')
                        play(selected, null);
                }}
            />
        </Row>
    </Container>
);

const mapStateToProps = state => ({ selected: state.game.selected });
export default connect(mapStateToProps, { play })(BottomBar);

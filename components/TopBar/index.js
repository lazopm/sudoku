import React, { Component } from 'react';
import { connect } from 'react-redux';
import pad from 'lodash/padStart';
import styled from 'styled-components/native';
import Undo from './Undo';

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
    align-items: flex-end;
`;

const Controls = styled.View`
    padding-bottom: 10;
`;

const Time = styled.Text`
    color: #76D7C4;
    font-size: 60;
    font-weight: bold;
`;

const formatTime = seconds => {
    const ss = pad(String(seconds % 60), 2, '0');
    const hh = pad(String(Math.floor(seconds / 60)), 2, '0');
    return `${hh}:${ss}`;
};

class TopBar extends Component {
    constructor() {
        super();
        this.startTime = Date.now();
        this.state = {
            time: 0,
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            const time = Math.floor((Date.now() - this.startTime) / 1000);
            if (time !== this.state.time) {
                this.setState(state => ({ time }));
            }
        }, 500);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <Container>
                <Inner>
                    <Controls>
                        <Undo/>
                    </Controls>
                    <Time>{formatTime(this.state.time)}</Time>
                </Inner>
            </Container>
        );
    }
}

const mapDispatchToProps = {};
export default connect(null, mapDispatchToProps)(TopBar);

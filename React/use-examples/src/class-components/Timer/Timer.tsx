import React, { Component } from 'react';

interface TimerState {
    seconds: number;
}

class Timer extends Component<{}, TimerState> {
    state: TimerState = { seconds: 0 };
    private intervalId: NodeJS.Timeout | null = null;

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) clearInterval(this.intervalId);
    }

    render() {
        return <div>Elapsed Time: {this.state.seconds}s</div>;
    }
}

export default Timer;
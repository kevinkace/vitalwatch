import React, { Component } from 'react';

        // set up queue of events to process when widgets.js loads
export default class TwttrQueue extends Component {
    componentDidMount() {
        if (!window.twttr) {
            window.twttr = { _e: [] };
        }
    }

    render() {
        return <></>;
    }
};

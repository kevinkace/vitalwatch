import React, { Component } from 'react';

let twttrLoaded;

export default class TwttrQueue extends Component {
    componentDidMount() {
        // set up queue of events to process when widgets.js loads

        console.log("hhat");

        if (twttrLoaded) {
            return;
        }

        console.log("aasdhfadhfahsdf");

        window.twttr = { _e: [
            () => {
                console.log("testses");
                twttrLoaded = true;
            }
        ] };

    }

    render() {
        return <></>;
    }
};

import React from 'react';

export default class Tweet extends React.Component {
    constructor(props) {
        super(props);

        this.id     = props.id;
        this.thread = props.thread;
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const params = {
            omit_script  : 'true',
            theme        : 'dark',
            link_color   : '#a798d3',
            dnt          : 'true',
            maxwidth     : 400,
            conversation : this.thread ? null : 'none'
        };

        if (window.twttr._e) {
            window.twttr._e.push(twttr => {
                twttr.widgets.createTweet(this.id, this.myRef.current, params);
            });
        } else {
            window.twttr.widgets.createTweet(this.id, this.myRef.current, params);
        }
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
};

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import css from './index.module.css';

import data from './data';

import Tweet from './tweet';

export default function Tweets({ max = 3 }) {
    // todo: something less shit than this
    // const tweets = useStaticQuery(
    //     graphql`
    //         query {
    //             twitterStatusesOembed0 { html }
    //             twitterStatusesOembed1 { html }
    //             twitterStatusesOembed2 { html }
    //             twitterStatusesOembed3 { html }
    //             twitterStatusesOembed4 { html }
    //             twitterStatusesOembed5 { html }
    //             twitterStatusesOembed6 { html }
    //             twitterStatusesOembed7 { html }
    //             twitterStatusesOembed8 { html }
    //             twitterStatusesOembed9 { html }
    //             twitterStatusesOembed10 { html }
    //             twitterStatusesOembed11 { html }
    //             twitterStatusesOembed12 { html }
    //             twitterStatusesOembed13 { html }
    //             twitterStatusesOembed14 { html }
    //             twitterStatusesOembed15 { html }
    //             twitterStatusesOembed16 { html }
    //             twitterStatusesOembed17 { html }
    //             twitterStatusesOembed18 { html }
    //             twitterStatusesOembed19 { html }
    //             twitterStatusesOembed20 { html }
    //             twitterStatusesOembed21 { html }
    //             twitterStatusesOembed22 { html }
    //             twitterStatusesOembed23 { html }
    //             twitterStatusesOembed24 { html }
    //         }
    //     `
    // );

    // const tweetEntries = Object.entries(tweets);

    const [ toShow, setToShow ] = useState(max);


    return <div className={css.section}>
        <h2>Tweets</h2>

        <div className={css.tweets}>
            {/* {tweetEntries.slice(0, toShow).map(([ key, { html } ]) => <Tweet html={html} key={key} />)} */}
            {data.slice(0, toShow).map(( { id, thread } ) =>
                // <div key={id}>{id}</div>
                <Tweet id={id} key={id} thread={thread} />
            )}
        </div>

        <button onClick={() => { setToShow(toShow + 3); }}>show more</button>
    </div>;
};

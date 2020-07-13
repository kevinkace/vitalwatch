import React, { useState } from 'react';

import css from './index.module.css';

import data from './data';

import Tweet from './tweet';

export default function Tweets({ initialNum = 3 }) {
    const [ toShow, setToShow ] = useState(initialNum);

    return <div className={css.section}>
        <h2 id='tweets'>Tweets</h2>

        <div className={css.tweets}>
            {data.slice(0, toShow).map(( { id, thread } ) =>
                <Tweet id={id} key={id} thread={thread} />
            )}
        </div>

        { toShow < data.length ?
            <button
                className={css.more}
                onClick={() => {
                    let newVal = toShow + 3;

                    if (newVal > data.length) {
                        newVal = data.length;
                    }

                    setToShow(newVal);
                }}
            >
                load more
            </button> :
            null
        }
    </div>;
};

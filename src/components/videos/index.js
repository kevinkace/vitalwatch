import React, { useState } from 'react';

import css from './index.module.css';

import data from './data';
import { Video } from './Video';

export default function Videos({ initialNum = 3 }) {
    const [ toShow, setToShow ] = useState(initialNum);

    return <div className={css.section} id='videos'>
        <h2>Videos</h2>

        <div className={css.videos}>
            {data.slice(0, toShow).map(( { id } ) =>
                <Video id={id} key={id}/>
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

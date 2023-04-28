import React from 'react';

import style from './style.module.scss';

import time from './time.js';

export default function Time() {
    return (<>
        <p className={style.time} id="time"></p>
        {time()}
    </>)
}
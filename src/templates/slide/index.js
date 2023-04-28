import React from 'react';

import style from './style.module.scss';

const agiotas = [
    "images/caloteiro0.jpg",
    "images/caloteiro1.jpeg",
    "images/caloteiro2.jpg",
    "images/caloteiro3.jpg",
    "images/caloteiro4.jpg",
    "images/caloteiro5.jpeg",
    "images/caloteiro6.jpg",
    "images/caloteiro7.jpeg"
]


export default function Slide() {

    let image = agiotas[randomInt(0, 7)]

    return (<div className={style.memeContainer}>
        <img className={style.meme} src={image} alt="Vinicius Caloteiro Memes"></img>
    </div>)
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


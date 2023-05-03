import React, {useEffect} from 'react';

import style from './style.module.scss';

const agiotas = [
    "images/caloteiro0.jpg",
    "images/caloteiro1.jpeg",
    "images/caloteiro2.jpg",
    "images/caloteiro3.jpg",
    "images/caloteiro4.jpg",
    "images/caloteiro5.jpeg",
    "images/caloteiro6.jpg",
    "images/caloteiro7.jpeg",
    "images/caloteiro8.jpeg",
    "images/caloteiro9.jpeg",
    "images/caloteiro10.jpeg",
    "images/caloteiro11.jpeg",
    "images/caloteiro12.jpeg",
    "images/caloteiro13.jpeg",
    "images/caloteiro14.jpeg"
]


export default function Slide() {

    let image = agiotas[0]

    return (<div className={style.memeContainer}>
        {useEffect(() => {
            document.getElementById("meme").src = agiotas[randomInt(0, agiotas.length - 1)]
        })}
        <img id="meme" className={style.meme} src={image} alt="Vinicius Caloteiro Memes"></img>
    </div>)
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


import React from 'react';

import style from './style.module.scss';

export default function Header({children, theme}) {

    let th;
    switch(theme) {
        case 1:
            th = style.theme1
            break;
        case 2:
            th = style.theme2
            break;
        default:
            th = style.theme1
    }

    return (<section className={th}>
        {children}
    </section>)
}
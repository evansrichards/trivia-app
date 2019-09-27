import * as React from 'react';
import './card.scss';

interface Props {
    children: any;
}

export const Card = (props: Props) => {
    return <div className="card">{props.children}</div>
}

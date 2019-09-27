import * as React from 'react';
import './bar.scss';

interface Props {
    children: any;
}

export const Bar = (props: Props) => {
    return <div className="bar">{props.children}</div>
}

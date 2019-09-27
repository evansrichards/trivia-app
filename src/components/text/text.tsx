import * as React from 'react';
import './text.scss';

interface Props {
    children: any;
}

export const Title = (props: Props) => <h1 className="title">{props.children}</h1>;
export const Heading = (props: Props) => <h2 className="heading">{props.children}</h2>;
export const Subheading = (props: Props) => <h3 className="subheading">{props.children}</h3>;
export const Paragraph = (props: Props) => <p className="paragraph">{props.children}</p>;

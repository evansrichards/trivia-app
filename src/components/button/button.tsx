import * as React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

interface Props {
    children?: string;
    disabled?: boolean;
    to?: string;
    onClick?: () => any;
}

export class Button extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(e: React.MouseEvent) {
        e.preventDefault();
        if (!this.props.disabled && this.props.onClick) { this.props.onClick(); }
    }

    public render() {
        return (
            this.props.to ?
                <Link to={this.props.to} className="button">{this.props.children}</Link>
            : <button
                className="button"
                onClick={this.handleClick}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }
}

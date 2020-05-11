import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card md-3">
                <div className="card-header text-center">
                    {this.props.title}
                </div>
                <div className="card-body">{this.props.children}</div>
            </div>
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';

export default function ListGroup(props) {
    return (
        <div className="list-group">
            <h5>{props.title}</h5>
            {props.children}
        </div>
    );
}

ListGroup.propTypes = {
    title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function ListGroupItem(props) {
    return (
        <a className="list-group-item list-group-item-action" href={props.href}>
            {props.label}
        </a>
    );
}

ListGroupItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

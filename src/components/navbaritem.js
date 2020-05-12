import React from 'react';
import PropTypes from 'prop-types';

export default function NavBarItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.href}>
                {props.label}
            </a>
        </li>
    );
}

NavBarItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

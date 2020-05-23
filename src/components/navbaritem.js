import React from 'react';
import PropTypes from 'prop-types';

export default function NavBarItem(props) {
    if (props.render) {
        return (
            <li className="nav-item">
                <a className="nav-link" href={props.href}>
                    {props.label}
                </a>
            </li>
        );
    } else {
        return <div />;
    }
}

NavBarItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

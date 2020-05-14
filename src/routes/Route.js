import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const token = localStorage.getItem('token');

    if (token == null && isPrivate) {
        return <Redirect to="/" />;
    }

    if (token != null && !isPrivate) {
        return <Redirect to="/inicio" />;
    }

    return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};

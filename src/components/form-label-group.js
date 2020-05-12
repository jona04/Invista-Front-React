import React from 'react';
import PropTypes from 'prop-types';

function FormLabelGroup(props) {
    return (
        <div className="form-label-group">
            {props.children}
            <label htmlFor={props.htmlFor}>{props.label}</label>
        </div>
    );
}
export default FormLabelGroup;

FormLabelGroup.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

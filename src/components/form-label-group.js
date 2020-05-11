import React from 'react';

function FormLabelGroup(props) {
    return (
        <div className="form-label-group">
            {props.children}
            <label htmlFor={props.htmlFor}>{props.label}</label>
        </div>
    );
}
export default FormLabelGroup;

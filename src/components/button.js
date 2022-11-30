import React, { } from "react";
import '../css/scss/button.scss';

const Button = (props) => {

    return (
        <a href="#" className={`btn-${props.isButton}`} >
            {props.nameButton}
        </a>
    )
}

export default Button;
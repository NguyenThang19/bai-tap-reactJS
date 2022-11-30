import React, { Component, useEffect, useRef } from "react";
import '../css/scss/title.scss';
const Title = (props) => {
    let titleRef = useRef(null);
    useEffect(() => {
        setTimeout(
            () => {
                if (titleRef.current.id === "titleBanner") {
                    titleRef.current.classList.remove('titleBanner');
                    titleRef.current.classList.add('trans-title');
                }
            }, 400
        );
    },)
    return (
        <div className="top-section">
            <span className="icon-left">
                <img src={props.iconDishCategorys} alt="" />
            </span>
            <h2 className={`title ${props.isClass}`} ref={titleRef} id={props.isID}>
                {props.isTitle}
            </h2>
            <span className="icon-right">
                <img src={props.iconDishCategorys} alt="" />
            </span>
        </div >
    )
}

const SubTitle = (props) => {
    return (
        <p className={`sub-title-${props.isSub}`}>
            {props.isSubTitle}
        </p>
    )
}

export { SubTitle };

export default Title;
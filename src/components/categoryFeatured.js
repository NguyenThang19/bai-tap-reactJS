import React, { Component } from "react";
import '../css/scss/dishFeatured.scss';

const DishFeatured = (props) => {
    return (
        <div className= "contain-items-dish" key={props.keys}>
            <a href="#" className="content-items-dish">
                <img src={`${props.imageDish}`} className="image-dish" />
                <h4 className="title-items-dish" >
                    {props.nameDish}
                </h4>
                <p className="desc-items-dish">
                    {props.descDish}
                </p>
            </a>
        </div>
    )
}

export default DishFeatured;
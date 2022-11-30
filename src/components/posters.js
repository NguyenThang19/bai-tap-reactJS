import React, {} from "react";
import '../css/scss/posters.scss';


const PosterItems = (props) => {
    return(
        <div className="poster-items">
            <img src= {props.image} />
            <div className="content-poster">
                <a href="#" className="text">
                    Dola Restaurant
                </a>
                <a href="#" className="title">
                    {props.title}
                </a>
            </div>
        </div>
    )
}

export default PosterItems;
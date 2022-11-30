import React, { } from "react";

const StatisItems = (props) => {
    return (
        <div className="statis-items">
            <img src={props.image} />
            <div className="info-items">
                <p className="numb">
                    {props.numCount}
                </p>
                <p className="title" >
                    {props.titles}
                </p>
            </div>
        </div>
    )
}

export default StatisItems;
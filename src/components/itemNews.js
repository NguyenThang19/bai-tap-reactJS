import React, { } from "react";
import ReadMore from "./readmore";
import '../css/scss/itemNews.scss';

const ItemNewsOdd = (props) => {
    return (
        <div className="item-news" key={props.keys}>
            <div className="image">
                <img src={props.imageNews} />
                
                <div className="date">
                    {props.dateNews}
                </div>
            </div>
            < div className="content">
                <p className="posted-by" >
                    Đăng bởi: {props.posted}
                </p>
                <a className="title" href="#" title={props.titleNews}>
                    {props.titleNews}
                </a>
                <p className="desc">
                    {props.descNews}
                </p>
                < ReadMore />
            </div>
        </div>
    )
}

const ItemNewsEven = (props) => {
    return (
        <div className="item-news" key={props.keys}>
            < div className="content">
                <p className="posted-by" >
                    Đăng bởi :{props.posted}
                </p>
                <a className="title" href="#" title={props.titleNews}>
                    {props.titleNews}
                </a>
                <p className="desc">
                    {props.descNews}
                </p>
                < ReadMore />
            </div>
            <div className="image">
                <img src={props.imageNews} />

                <div className="date">
                    {props.dateNews}
                </div>
            </div>
        </div>
    )
}

export { ItemNewsOdd };

export default ItemNewsEven;
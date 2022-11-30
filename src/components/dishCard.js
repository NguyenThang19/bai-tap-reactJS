import React, { } from "react";
import '../css/scss/dishCard.scss';
import Button from "./button";

const IconShow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(214, 157, 81, .6)" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
        </svg>
    )
}

const IconstBookNow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="20" heigh="20" fill="rgba(214, 157, 81, .6)" viewBox="0 0 576 512"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"></path></svg>
    )
}

const DiscountPercent = (props) => {
    return (
        <span className="label-percent" >
            {props.perCent}%
        </span>
    )
}


const DishCard = (props) => {
    return (
        <a href="#" className="dishCard-items">
            <DiscountPercent perCent={props.perCentItems} />
            <img src={props.imageItems} />
            <p className="name-dish">
                {props.nameItems}
            </p>
            <p className="price-dish" >
                {props.priceItems} &#8363;
                <span className="old-price" >
                    {props.oldPriceItems} &#8363;
                </span>
            </p>
            {/* <IconShow />
            <IconstBookNow /> */}
            <Button isButton='cards' nameButton='Xem Chi Tiết' />
            <div className="cover">
                <a href="#" className="btn-views quick-show" title="Xem nhanh" >
                    <IconShow />
                </a>
                <a href="#" className="btn-views quick-book" title="Đặt món" >
                    <IconstBookNow />
                </a>
            </div>
        </a>
    )
}


export default DishCard;
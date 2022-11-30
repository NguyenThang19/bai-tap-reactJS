import React, {useEffect, useRef, useState} from "react";
import '../css/scss/banner.scss';
import Button from "./button";
import Title, { SubTitle } from "./title";

const Banner = () => {
    const [state, setState] = useState({
        title: "Dola Restaurant",
        subTitle: "Món ăn đa dạng"
    });    
    return(
        <div className="banner-section">
            < Title isTitle = {state.title} isID='titleBanner' isClass = "titleBanner"/>
            < SubTitle isSubTitle = {state.subTitle} isSub = 'banner' />
            < Button isButton = 'banner' nameButton = 'Đặt Bàn Ngay' />
        </div>
    )   
}

export default Banner;
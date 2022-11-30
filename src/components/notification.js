import React, { useEffect, useRef } from "react";
import imageNoti from '../css/image/dish-1.jpg';
import '../css/scss/notification.scss';

const Notification = () => {
    let notifi = useRef(null);
    useEffect(() => {
       setTimeout(() => {
        notifi.current.classList.add('show-notifi');
       }, 2000);

       setTimeout( () => {
       notifi.current.classList.remove('show-nitifi') }, 4000);
    }, [])
    return(
        <div className="notification-box" ref={notifi}>
            <img src= {imageNoti}/>
            <div className="content-box">
                <p className="title">
                    Món ăn
                </p>
                <p className = "name">
                    Sala Rau đủ thứ
                </p>
                <p className="desc-notifi">
                    Đã được mua cách đây 25 phút
                </p>
            </div>      
        </div>
    )
}


export default Notification;
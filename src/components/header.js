import React, { Component, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from "../views/pages/homepage";
import ContactPage from "../views/pages/contact";
import AboutPage from "../views/pages/about";
import MenuPage from "../views/pages/menu";
import DeliciousEveryDayPage from "../views/pages/deliciousEveryDay";
import App from '../../src/App';

import '../css/scss/header.scss';

import Button from "./button";

const ListLinks = [
    {
        link: "Trang Chủ",
        path: "/"
    },
    {
        link: "Giới Thiệu",
        path: "/intro"
    },
    {
        link: "Menu",
        path: "/menu"
    },
    {
        link: "Món Ăn Nổi Bật",
        path: "/specials"
    },
    {
        link: "Món Ngon Mỗi Ngày",
        path: "/delicious-food-every-day"
    },
    {
        link: "Liên Hệ",
        path: "/contact-us"
    },
];


export const Menu = () => {
    return (
        <>
            <ul className="nav">
                {
                    ListLinks.map((value, index) => {
                        return (
                            <li className="nav-items">
                                <Link to={value.path} key={index} >
                                    {value.link}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
{/* 
            <Router>
                <Route path= "/" element = {<HomePage />} />
                <Route path= "/intro" element = {<AboutPage/>} />
                <Route path= "/menu" element = {<MenuPage />} />
                <Route path= "/specials" element = {<App />} />
                <Route path= "/delicious-food-every-day" element = {<DeliciousEveryDayPage />} />
                <Route path= "/contact-us" element = {<ContactPage/>} />
            </Router> */}
        </>
    )
}


const Header = () => {
    
    // Handle Show SideBar of Button Toggle Sidebar
        const showSideBar = () => {
            document.querySelector('.side-bar-section').classList.remove('hide-side-bar-section');
            document.querySelector('.menu-side-bar').classList.remove('hide-side-bar-menu');
            setTimeout(
                () => {
                    document.querySelector('.menu-side-bar').classList.add('show-side-bar-menu');
                }, 500
            )
        }
    return (
        <div className="header">
            <div className="btn-toggle-side-bar" onClick={showSideBar}>
                <span> </span>
                <span> </span>
                <span> </span>
            </div>
            <a href="#" className="logo">
                <img src='https://bizweb.sapocdn.net/100/469/097/themes/882205/assets/logo.png?1668478257754' />
            </a>
            < Menu />
            <Button isButton='header' nameButton='Đặt Bàn' />
        </div>
    )
}

export default Header;
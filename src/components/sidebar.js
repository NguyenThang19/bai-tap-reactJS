import React, { useRef } from "react";
import '../css/scss/sideBar.scss';
import logo from '../css/image/logo-ft.png';
import { Menu } from "./header";

const SideBarSection = () => {

    const sideBarRef = useRef(null);
    const sideBarMenuRef = useRef(null);
    const HideSideBar = () => {
        sideBarMenuRef.current.classList.remove('show-side-bar-menu');
        sideBarMenuRef.current.classList.add('hide-side-bar-menu');
        setTimeout(() => {
            sideBarRef.current.classList.add('hide-side-bar-section');
        }, 500);
    }

    const handleMenu = (e) => {
        e.stopPropagation();
    }
    return (
        <div className="side-bar-section hide-side-bar-section" ref={sideBarRef} onClick={HideSideBar}>
            <div className="menu-side-bar" ref={sideBarMenuRef} onClick = {handleMenu}>
                <div className="logo">
                    <img src={logo} />
                </div>
                < Menu />
            </div>
        </div>
    )
}

export default SideBarSection;
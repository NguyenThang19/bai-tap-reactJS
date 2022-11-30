import React, { } from "react";

import logoft from '../css/image/logo-ft.png';
import { IconsPayment, IconsSocial } from "../data/data";
import Button from "./button";
import '../css/scss/footer.scss';


let FooterSupportLinks = [
    {
        title: "Hướng dẫn mua hàng",
        path: "/"
    },
    {
        title: "Hướng dẫn thanh toán",
        path: "/"
    },
    {
        title: "Đăng ký thành viên",
        path: "/"
    },
    {
        title: "Hỗ trợ khách hàng",
        path: "/"
    }
]

let FooterCustomerLinks = [
    {
        title: "Chính sách thành viên",
        path: "/"
    },
    {
        title: "Chính sách thanh toán",
        path: "/"
    },
    {
        title: "Chính sách mua hàng",
        path: "/"
    },
    {
        title: "Bảo mật thông tin cá nhân",
        path: "/"
    },
    {
        title: "Quà tri ân",
        path: "/"
    }
]

const FooterItems = (props) => {
    return (
        <li className={`${props.namePart}-items`}>
            {props.items}
        </li>
    )

}

const Footer = () => {
    return (
        < div className="footer-section">

            <div className="footer-about">
                <div className="logo">
                    <img src={logoft} />
                </div>
                <div className="desc">
                    Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.
                </div>
                <div className="address">
                    <h3>
                        Cửa hàng chính
                    </h3>
                    <p>
                        <span>Địa chỉ:</span>
                        70 Lữ Gia, phường 15, quận 11, TP. Hồ Chí Minh
                    </p>
                    <p>
                        <span>Điện thoại:</span>
                        1900 6750
                    </p>
                    <p>
                        <span>Email</span>
                        support@sapo.vn
                    </p>
                </div>
                <div>
                <Button isButton='footer' nameButton='Hệ thống cửa hàng' />

                </div>
            </div>

            <ul className="footer-support">
                <h3 className="title">
                    Hướng dẫn
                </h3>
                {
                    FooterSupportLinks.map((value, index) => {
                        return <FooterItems namePart='support' items={value.title} key={index} />
                    })
                }
            </ul>

            <ul className="footer-customer">
                <h3 className="title">
                    Chính sách
                </h3>
                {
                    FooterCustomerLinks.map((value, index) => {
                        return <FooterItems namePart='customer' items={value.title} key={index} />
                    })
                }
            </ul>

            <div className="group-socials-payments">
                <div className="socials" >
                    <h3 className="title">
                        Mạng xã hội
                    </h3>
                    {
                        IconsSocial.map((value) => {
                            return <a href="#" className="items" > <img src={value} /> </a>
                        })
                    }
                </div>

                <div className="payment" >
                    <h3 className="title">
                        HÌNH THỨC THANH TOÁN
                    </h3>
                    {
                        IconsPayment.map((value) => {
                            return <a href="#" className="items" > <img src={value} /> </a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;
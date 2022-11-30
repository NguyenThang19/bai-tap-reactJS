import React, { Component } from "react";
import cate1 from '../css/image/cate_1.png';
import cate2 from '../css/image/cate_2.png';
import cate3 from '../css/image/cate_3.png';
import cate4 from '../css/image/cate_4.png';
import cate5 from '../css/image/cate_5.png';
import dish1 from '../css/image/dish-1.jpg';
import dish2 from '../css/image/dish-2.jpg';
import dish3 from '../css/image/dish-3.jpg';
import dish4 from '../css/image/dish-4.jpg';
import dish5 from '../css/image/dish-5.jpg';
import dish6 from '../css/image/dish-6.jpg';
import dish7 from '../css/image/dish-7.jpg';
import dish8 from '../css/image/dish-8.jpg';
import dish9 from '../css/image/dish-9.jpg';
import dish10 from '../css/image/dish-10.jpg';
import poster1 from '../css/image/poster1.png';
import poster2 from '../css/image/poster2.png';
import poster3 from '../css/image/poster3.png';
import poster4 from '../css/image/poster4.png';
import thongke1 from '../css/image/thong_ke1.png';
import thongke2 from '../css/image/thong_ke2.png';
import thongke3 from '../css/image/thong_ke3.png';
import thongke4 from '../css/image/thong_ke4.png';
import news1 from '../css/image/news_1.png';
import news2 from '../css/image/news_2.png';
import news3 from '../css/image/news_3.png';
import news4 from '../css/image/news_4.png';
import user1 from '../css/image/danhgia_1.png';
import user2 from '../css/image/danhgia_2.png';
import user3 from '../css/image/danhgia_3.png';
import payment1 from '../css/image/payment_1.png';
import payment2 from '../css/image/payment_2.png';
import payment3 from '../css/image/payment_3.png';
import facebookIcon from '../css/image/facebook-icon.png';
import zaloIcon from '../css/image/zalo-icon.png';
import youtubeIcon from '../css/image/youtube-icon.png';

export let IconsSocial = [facebookIcon, zaloIcon, youtubeIcon];
export let IconsPayment = [payment1, payment2, payment3];

export let imageThongKe = [
    thongke1,
    thongke2,
    thongke3,
    thongke4
]

export let dataCategoryDish =
    [
        {
            imageFood: cate1,
            nameFood: "Món bò",
            descFood: "Các món bò được chế biến tinh tế với hương vị đặt biệt nhất"
        },
        {
            imageFood: cate2,
            nameFood: "Món gà",
            descFood: "Các món gà được chế biến tinh tế với hương vị đặt biệt nhất"
        },
        {
            imageFood: cate3,
            nameFood: "Món heo",
            descFood: "Các món heo được chế biến tinh tế với hương vị đặt biệt nhất"
        },
        {
            imageFood: cate4,
            nameFood: "Món cá",
            descFood: "Các món cá được chế biến tinh tế với hương vị đặt biệt nhất"
        },
        {
            imageFood: cate5,
            nameFood: "Món khác",
            descFood: "Các món khác được chế biến tinh tế với hương vị đặt biệt nhất"
        }

    ];

export let listCategory =
    [
        'Khai vị',
        'Món chính',
        'Canh - Tiềm - Sup',
        'Cơm - mì - Cháo',
        'Tráng miệng',
        'Đồ uống'
    ];

export let dishCard = [
    {
        nameDish: "Dish 1",
        image: dish1,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish 2",
        image: dish2,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish 3",
        image: dish3,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish4",
        image: dish4,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish5",
        image: dish5,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish6",
        image: dish6,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish7",
        image: dish7,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish8",
        image: dish8,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish9",
        image: dish9,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish10",
        image: dish10,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    }
]

export let users = [
    {
        name: "Nguyen Van A",
        job: "Dau Bep",
        avatar: user1,
        commnent: "Món ăn ở đây hầu hết đều rất ngon, khẩu vị phù hợp với tôi, tôi sẽ luôn ủng hộ nhà hàng Dola Restaurant"
    },
    {
        name: "Nguyen Van B",
        job: "Dau Bep",
        avatar: user2,
        commnent: "Món ăn ở đây hầu hết đều rất ngon, khẩu vị phù hợp với tôi, tôi sẽ luôn ủng hộ nhà hàng Dola Restaurant"
    }, {
        name: "Nguyen Van C",
        job: "Dau Bep",
        avatar: user3,
        commnent: "Món ăn ở đây hầu hết đều rất ngon, khẩu vị phù hợp với tôi, tôi sẽ luôn ủng hộ nhà hàng Dola Restaurant"
    },
]

export let dishSpecial = [
    {
        nameDish: "Dish 1",
        image: dish1,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish 2",
        image: dish2,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish 3",
        image: dish3,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish4",
        image: dish4,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish5",
        image: dish5,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
    {
        nameDish: "Dish 6",
        image: dish1,
        price: 100000,
        oldPrice: 110000,
        percent: 10,
        descDish: "Description"
    },
]

export let dataPoster = [
    {
        title: 'Món ăn đa dạng',
        image: poster1
    },
    {
        title: 'Hương vị đặc biệt',
        image: poster2
    },
    {
        title: 'Công thức động quyền',
        image: poster3
    },
    {
        title: 'Đảm bảo chất lượng',
        image: poster4
    }
]

export let dataSaff = [
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
    {
        name: "Nguyen Van A",
        gender: "male",
        date: "1999/12/19",
        address: "strict A",
    },
]

export let dataCustomer = [
    {
        idCustomer: 1,
        name: " Nguyen A ",
        gender: "male"
    },
    {
        idCustomer: 2,
        name: " Nguyen B ",
        gender: "female"
    },
    {
        idCustomer: 3,
        name: " Nguyen A ",
        gender: "male"
    },
    {
        idCustomer: 4,
        name: " Nguyen B ",
        gender: "female"
    },
    {
        idCustomer: 5,
        name: " Nguyen A ",
        gender: "male"
    },
    {
        idCustomer: 6,
        name: " Nguyen B ",
        gender: "female"
    },
    {
        idCustomer: 7,
        name: " Nguyen A ",
        gender: "male"
    },
    {
        idCustomer: 8,
        name: " Nguyen B ",
        gender: "female"
    },
    {
        idCustomer: 9,
        name: " Nguyen B ",
        gender: "female"
    }
]

export let dataStoreBrach = [
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    },
    {
        id: 1
    }
]

export let dataNews = [
    {
        idNews: 1,
        title: "Mách bạn công thức làm canh cá nấu mẻ thơm ngon đậm vị",
        image: news1,
        date: "24/10/2022",
        desc: "  Canh cá nấu mẻ  là món ăn dân dã, quen thuộc trong mỗi mâm cơm gia đình...",
        postedBy: "Admin Dola"
    },
    {
        idNews: 2,
        title: "Tuyển tập 8 món xào đơn giản, tiết kiệm thời gian cho chị em",
        image: news2,
        date: "24/10/2022",
        desc: "   Cùng Bếp nhà Dola khám phá  công thức làm 8 món xào đơn giản , nhanh gọn trong...",
        postedBy: "Admin Dola"
    },
    {
        idNews: 3,
        title: "Hé lộ chìa khóa vàng giúp thiết lập được công thức nấu ăn ngon",
        image: news3,
        date: "24/10/2022",
        desc: "  Mâm cơn ngon miệng và đầy đủ dinh dưỡng ... Thực phẩm...",
        postedBy: "Admin Dola"
    },
    {
        idNews: 4,
        title: "1001 món ngon mỗi ngày - Giải quyết vấn đề “Hôm nay ăn gì?”",
        image: news4,
        date: "24/10/2022",
        desc: "   Bữa sáng là một trong những bữa ăn quan trọng trong ngày, giúp cung cấp năng lượng cho một...",
        postedBy: "Admin Dola"
    }
]
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
            nameFood: "M??n b??",
            descFood: "C??c m??n b?? ???????c ch??? bi???n tinh t??? v???i h????ng v??? ?????t bi???t nh???t"
        },
        {
            imageFood: cate2,
            nameFood: "M??n g??",
            descFood: "C??c m??n g?? ???????c ch??? bi???n tinh t??? v???i h????ng v??? ?????t bi???t nh???t"
        },
        {
            imageFood: cate3,
            nameFood: "M??n heo",
            descFood: "C??c m??n heo ???????c ch??? bi???n tinh t??? v???i h????ng v??? ?????t bi???t nh???t"
        },
        {
            imageFood: cate4,
            nameFood: "M??n c??",
            descFood: "C??c m??n c?? ???????c ch??? bi???n tinh t??? v???i h????ng v??? ?????t bi???t nh???t"
        },
        {
            imageFood: cate5,
            nameFood: "M??n kh??c",
            descFood: "C??c m??n kh??c ???????c ch??? bi???n tinh t??? v???i h????ng v??? ?????t bi???t nh???t"
        }

    ];

export let listCategory =
    [
        'Khai v???',
        'M??n ch??nh',
        'Canh - Ti???m - Sup',
        'C??m - m?? - Ch??o',
        'Tr??ng mi???ng',
        '????? u???ng'
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
        commnent: "M??n ??n ??? ????y h???u h???t ?????u r???t ngon, kh???u v??? ph?? h???p v???i t??i, t??i s??? lu??n ???ng h??? nh?? h??ng Dola Restaurant"
    },
    {
        name: "Nguyen Van B",
        job: "Dau Bep",
        avatar: user2,
        commnent: "M??n ??n ??? ????y h???u h???t ?????u r???t ngon, kh???u v??? ph?? h???p v???i t??i, t??i s??? lu??n ???ng h??? nh?? h??ng Dola Restaurant"
    }, {
        name: "Nguyen Van C",
        job: "Dau Bep",
        avatar: user3,
        commnent: "M??n ??n ??? ????y h???u h???t ?????u r???t ngon, kh???u v??? ph?? h???p v???i t??i, t??i s??? lu??n ???ng h??? nh?? h??ng Dola Restaurant"
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
        title: 'M??n ??n ??a d???ng',
        image: poster1
    },
    {
        title: 'H????ng v??? ?????c bi???t',
        image: poster2
    },
    {
        title: 'C??ng th???c ?????ng quy???n',
        image: poster3
    },
    {
        title: '?????m b???o ch???t l?????ng',
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
        title: "M??ch b???n c??ng th???c l??m canh c?? n???u m??? th??m ngon ?????m v???",
        image: news1,
        date: "24/10/2022",
        desc: "  Canh c?? n???u m???  l?? m??n ??n d??n d??, quen thu???c trong m???i m??m c??m gia ????nh...",
        postedBy: "Admin Dola"
    },
    {
        idNews: 2,
        title: "Tuy???n t???p 8 m??n x??o ????n gi???n, ti???t ki???m th???i gian cho ch??? em",
        image: news2,
        date: "24/10/2022",
        desc: "   C??ng B???p nh?? Dola kh??m ph??  c??ng th???c l??m 8 m??n x??o ????n gi???n , nhanh g???n trong...",
        postedBy: "Admin Dola"
    },
    {
        idNews: 3,
        title: "H?? l??? ch??a kh??a v??ng gi??p thi???t l???p ???????c c??ng th???c n???u ??n ngon",
        image: news3,
        date: "24/10/2022",
        desc: "  M??m c??n ngon mi???ng v?? ?????y ????? dinh d?????ng ... Th???c ph???m...",
        postedBy: "Admin Dola"
    },
    {
        idNews: 4,
        title: "1001 m??n ngon m???i ng??y - Gi???i quy???t v???n ????? ???H??m nay ??n g??????",
        image: news4,
        date: "24/10/2022",
        desc: "   B???a s??ng l?? m???t trong nh???ng b???a ??n quan tr???ng trong ng??y, gi??p cung c???p n??ng l?????ng cho m???t...",
        postedBy: "Admin Dola"
    }
]
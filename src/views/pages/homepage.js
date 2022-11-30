// Import Library
import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide, breakpoints } from "swiper/react";
import 'swiper/css';

// Import Component
import Banner from "../../components/banner";
import Header from "../../components/header";
import Title, { SubTitle } from "../../components/title";
import DishFeatured from "../../components/categoryFeatured";
import ReadMore from "../../components/readmore";
import Category from "../../components/category";
import DishCard from "../../components/dishCard";
import PosterItems from "../../components/posters";
import StatisItems from "../../components/statisticalItems";
import ItemNewsEven, { ItemNewsOdd } from "../../components/itemNews";
import FeedBack from "../../components/feedbacks";
import Footer from "../../components/footer";
import Notification from "../../components/notification";

// Import Image Data
import bannerAbout from '../../css/image/image-about.png';
import iconDishCategory from '../../css/image/icon1.png';

// Import fake Data 
import { dataCategoryDish, dataPoster, dataSaff, dataStoreBrach, dishCard, imageThongKe, users } from "../../data/data";
import { listCategory } from "../../data/data";
import { dishSpecial } from "../../data/data";
import { dataCustomer } from "../../data/data";
import { dataNews } from "../../data/data";

// Import File Style
import '../../css/scss/homepage.scss';
import '../../css/scss/aboutSection.scss';
import '../../css/scss/dishCategory.scss';
import '../../css/scss/category.scss';
import '../../css/scss/listDishCard.scss';
import '../../css/scss/specialDishList.scss';
import '../../css/scss/containPostersStatis.scss';
import '../../css/scss/news.scss';
import '../../css/scss/responsiveHomePage.scss';
import SideBarSection from "../../components/sidebar";

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="items-left">
                < SubTitle isSubTitle='Về Chúng Tôi' isSub='about' />
                < Title isTitle='Dola Restaurant' isClass='titleAbout' />
                <p className="desc">
                    Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.
                </p>
                <ReadMore />
            </div>
            <div className="items-right">
                <img src={bannerAbout} className="banner-about" alt="this is banner about section" />
            </div>
        </div>
    )
}

const HomePage = () => {
    // Count Items
    let CountCustomer = dataCustomer.length;
    let countDisCard = dishCard.length;
    let countSaff = dataSaff.length;
    let countBranch = dataStoreBrach.length;
    let countArray =
        [
            {
                title: "Cửa hàng",
                number: countBranch
            },
            {
                title: "Nhân viên",
                number: countSaff
            },
            {
                title: "Khách hàng",
                number: CountCustomer
            },
            {
                title: "Món ăn",
                number: countDisCard
            }
        ];

    return (
        <div className="container">
            <SideBarSection />
            <Notification />
            < Header />
            < Banner />
            < AboutSection />
            <div className="featured-category">
                <div className="top-category">
                    <Title isTitle='Danh Mục Nổi Bật' iconDishCategorys={iconDishCategory} isClass='titleFeature' />
                </div>
                < Swiper className="body-category"
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    pagination

                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                            slidesPerGroup: 1
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        },

                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        }
                    }}
                >
                    {
                        dataCategoryDish.map((value, key) => {
                            return <SwiperSlide>
                                < DishFeatured imageDish={value.imageFood} nameDish={value.nameFood} descDish={value.descFood} keys={`dish${key}`} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            <div className="container-category">
                <Title
                    iconDishCategorys={iconDishCategory}
                    isTitle='Thực Đơn Của Chúng Tôi'
                    isClass='titleMenu'
                    for="menu-category"
                />
                <Category />
            </div>
            <div className="container-special-dish-list">
                <Title isTitle='Món Ăn Nổi Bật' iconDishCategorys={iconDishCategory} isClass='titleSpecial' />
                <Swiper className="list-special-dish"
                    pagination
                    slidesPerView={1}
                    spaceBetWeen={0}
                    slidesPerGroup={1}
                    breakpoints={{

                        1680: {
                            slidesPerView: 6,
                            spaceBetWeen: 0,
                            slidesPerGroup: 1

                        },

                        1326: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                            slidesPerGroup: 1,
                        },

                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                            slidesPerGroup: 1
                        },

                        826: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                            slidesPerGroup: 1
                        },

                        480: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                            slidesPerGroup: 1
                        },
                        326: {
                            slidesPerView: 1,
                            spaceBetWeen: 0,
                            slidesPerGroup: 1
                        }
                    }}
                >
                    {
                        dishSpecial.map((value, index) => {
                            return <SwiperSlide>
                                <DishCard
                                    nameItems={value.nameDish}
                                    imageItems={value.image}
                                    priceItems={value.price}
                                    oldPriceItems={value.oldPrice}
                                    descItems={value.descDish}
                                    perCentItems={value.percent}
                                    Ckey={`special-${index}`}
                                />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            <div className="group-post-statis">
                <div className="container-posters">
                    {
                        dataPoster.map((value, index) => {
                            return <PosterItems title={value.title} image={value.image} />
                        })
                    }
                </div>
                <div className="container-statistical">
                    {
                        imageThongKe.map((value, index) => {
                            return <StatisItems image={value} keys={`statis-${index}`} numCount={countArray[index].number} titles={countArray[index].title} />
                        })
                    }
                </div>
            </div>
            <div className="container-news">
                <Title isTitle='Tin Tức' iconDishCategorys={iconDishCategory} isClass='titleNews' />
                <Swiper className="list-news"
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    pagination

                    breakpoints={{
                        326: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                >
                    {
                        dataNews.map((value, index) => {
                            return value.idNews % 2 === 0 ?
                                <SwiperSlide>
                                    <ItemNewsEven
                                        imageNews={value.image}
                                        titleNews={value.title}
                                        descNews={value.desc}
                                        dateNews={value.date}
                                        posted={value.postedBy}
                                        keys={value.idNews}
                                    />
                                </SwiperSlide>
                                :
                                <SwiperSlide>
                                    <ItemNewsOdd
                                        imageNews={value.image}
                                        titleNews={value.title}
                                        descNews={value.desc}
                                        dateNews={value.date}
                                        posted={value.postedBy}
                                        keys={value.idNews}
                                    />
                                </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            < FeedBack />
            <Footer />
        </div >
    )
}

export default HomePage;
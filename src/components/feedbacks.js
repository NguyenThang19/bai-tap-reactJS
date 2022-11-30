import React, { } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { users } from "../data/data";
import '../css/scss/feedback.scss';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const FeedBack = () => {
    return (
        <div className="container-feed-back"
        >
            <Swiper className="list-items-news"
                slidesPerView={1}
                spaceBetween={20}
                slidesPerGroup={1}
                pagination
            // loop={true}
            // loopFillGroupWithBlank={true}
            >
                {
                    users.map((value, index) => {
                        return <SwiperSlide className="feedBack-items">
                            <div className="top-feedBack">
                                <div className="user">
                                    <div className="avt-user">
                                        <img src={value.avatar} />
                                    </div>
                                    <div className="info-user">
                                        <p className="name-user">
                                            {value.name}
                                        </p>
                                        <p className="job-user">
                                            {value.job}
                                        </p>
                                    </div>
                                </div>
                                <div className="blockquote">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#d69c52" viewBox="0 0 448 512">
                                        <path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-feedback">
                                {value.commnent}
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default FeedBack;
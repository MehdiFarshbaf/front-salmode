import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SwiperController from "../SwiperController/SwiperController";
import {useState} from "react";

// images
import img1 from './../../assets/images/bag1.png'
import img2 from './../../assets/images/bag2.png'
import img3 from './../../assets/images/bag3.png'
import img4 from './../../assets/images/bag4.png'

//styles
import styles from './SliderProductDetails.module.scss'

const SliderProductDetails = () => {

    // variables
    const [swiper, setSwiper] = useState(null);

    return (
        <div className={styles.container}>
            <Swiper
                // spaceBetween={'24px'}
                slidesPerView={4}
                // breakpoints={{
                //     // when window width is >= 640px
                //     // 640: {
                //     //     width: 640,
                //     //     slidesPerView: 1.5,
                //     // },
                //     // // when window width is >= 768px
                //     // 768: {
                //     //     width: 768,
                //     //     slidesPerView: 2,
                //     // },
                //     // 900: {
                //     //     width: 900,
                //     //     slidesPerView: 3,
                //     // },
                //     1200: {
                //         width: 135,
                //         slidesPerView: 4,
                //     },
                // }}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={{
                    el: "#containerForBullets",
                    type: "bullets",
                    bulletClass: "swiper-custom-bullet",
                    bulletActiveClass: "swiper-custom-bullet-active",
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
            >
                <SwiperSlide key={1}><img className={styles.images} src={img1} alt=""/></SwiperSlide>
                <SwiperSlide key={2}><img className={styles.images} src={img2} alt=""/></SwiperSlide>
                <SwiperSlide key={3}><img className={styles.images} src={img3} alt=""/></SwiperSlide>
                <SwiperSlide key={4}><img className={styles.images} src={img4} alt=""/></SwiperSlide>
                {/*<SwiperSlide key={5}><img className={styles.images} src={img1} alt=""/></SwiperSlide>*/}
                {/*<SwiperSlide key={6}><img className={styles.images} src={img2} alt=""/></SwiperSlide>*/}
                {/*<SwiperSlide key={7}><img className={styles.images} src={img3} alt=""/></SwiperSlide>*/}
                {/*<SwiperSlide key={8}><img className={styles.images} src={img4} alt=""/></SwiperSlide>*/}
            </Swiper>
            <SwiperController swiper={swiper}/>
        </div>
    )
}
export default SliderProductDetails
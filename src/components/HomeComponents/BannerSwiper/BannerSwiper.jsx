import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation,} from 'swiper/modules';
import {useState} from "react";

//images
import bannerImage from './banner.png'

//styles
import styles from './BannerSwiper.module.scss'
import SwiperController from "../../SwiperController/SwiperController";


const BannerSwiper = () => {

    const [swiper, setSwiper] = useState(null);
    return (
        <section className={styles.container}>
            <div className="inside">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={true}
                    loop={true}
                    pagination={{
                        el: "#containerForBullets",
                        type: "bullets",
                        bulletClass: "swiper-custom-bullet",
                        bulletActiveClass: "swiper-custom-bullet-active",
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                >
                    <SwiperSlide><img className={styles.imageBanner} src={bannerImage} alt="banner"/></SwiperSlide>
                    <SwiperSlide><img className={styles.imageBanner} src={bannerImage} alt="banner"/></SwiperSlide>
                    <SwiperSlide><img className={styles.imageBanner} src={bannerImage} alt="banner"/></SwiperSlide>
                    <SwiperSlide><img className={styles.imageBanner} src={bannerImage} alt="banner"/></SwiperSlide>
                </Swiper>
                <SwiperController swiper={swiper}/>
            </div>
        </section>
    )
}
export default BannerSwiper
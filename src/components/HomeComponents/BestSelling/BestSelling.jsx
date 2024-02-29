import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay,} from 'swiper/modules';

// styles
import styles from './../Offer/Offer.module.scss'
import ProductCard from "../../ProductCard/ProductCard";
import SwiperController from "../../SwiperController/SwiperController";
import {useState} from "react";
import {productList} from "../../../helpers/data";

const BestSelling = () => {

    // variables
    const [swiper, setSwiper] = useState(null);

    return (
        <section className='relative'>
            <div className="titleHomePage"><p>پر فروش ترین ها</p></div>
            <div className={styles.container}>
                <div className="inside">
                    <div className='w-100'>
                        <Swiper
                            spaceBetween={24}
                            // slidesPerView={4}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    width: 640,
                                    slidesPerView: 1.5,
                                },
                                // when window width is >= 768px
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                900: {
                                    width: 900,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 4,
                                },
                            }}
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
                            {productList.map(product => (
                                <SwiperSlide key={product.id}><ProductCard product={product}/></SwiperSlide>
                            ))}
                        </Swiper>
                        <SwiperController swiper={swiper}/>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default BestSelling
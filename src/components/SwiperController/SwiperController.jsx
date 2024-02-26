import styles from './SwiperController.module.scss'

//images
import arrowLeft from './../../assets/images/buttons/arrow-left.svg'
import arrowRight from './../../assets/images/buttons/arrow-right.svg'

const SwiperController = ({swiper}) => {
    return (
        <div className={styles.container}>
            <img src={arrowLeft} alt="arrow left" onClick={() => swiper.slideNext()}/>
            <img src={arrowRight} alt="arrow right" onClick={() => swiper.slidePrev()}/>
        </div>
    )
}
export default SwiperController
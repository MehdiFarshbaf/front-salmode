// styles
import styles from './WinterSale.module.scss'

//images
import imgWinterSale from './../../../assets/images/winterSale.png'

const WinterSale = () => {
    return (
        <section className={`${styles.container} d-flex`}>
            <div className="inside">
                <div className={styles.content}>
                    <div className={styles.imageContainer}><img src={imgWinterSale} alt=""/></div>
                    <div className={styles.rightSide}>
                        <p className={styles.title}>بهترین لباس های زمستانی با سال مد</p>
                        <p className={styles.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                            طلبد تا با نرم افزارها
                        </p>
                        <button className='btn'>خرید کنید</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WinterSale
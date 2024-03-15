import PageLayout from "../../layouts/PageLayout/PageLayout";

//images
import supportIcon from '../../assets/images/support.png'
import returnIcon from '../../assets/images/return.png'
import shippingIcon from '../../assets/images/shipping.png'
import banner from './banner.png'
import black from './black.png'
import white from './white.png'
//styles
import styles from './AboutUs.module.scss'

const AboutUs = () => {
    return (
        <PageLayout title="درباره ما">
            <section className={styles.container}>
                <div className={styles.card}>
                    <img src={shippingIcon} alt=""/>
                    <p className={styles.title}>ارسال سریع</p>
                    <p className={styles.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={returnIcon} alt=""/>
                    <p className={styles.title}>مرجوعیت کالا</p>
                    <p className={styles.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={supportIcon} alt=""/>
                    <p className={styles.title}>پشتیبانی 24 ساعته</p>
                    <p className={styles.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است.
                    </p>
                </div>
            </section>
            <section className={styles.content}>
                <div>
                    <p className={styles.title}>به سال مد خوش آمدید</p>
                    <p className={styles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                        شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                        زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                        فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    <p className={styles.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                        شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                        زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                        فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                        سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                        دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>
                <div>
                    <img src={banner} alt=""/>
                    <div className={styles.imageContainer}>
                        <img src={black} alt=""/>
                        <img src={white} alt=""/>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
export default AboutUs
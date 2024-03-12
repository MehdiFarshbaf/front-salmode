import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

//logo
import logo from './../../assets/images/logo.png'
import arrowLeft from '../../assets/images/arrowLeft.svg'

const Footer = () => {

    //variables
    const pageList = [
        {id: 0, title: 'اخبار', path: '/'},
        {id: 1, title: 'درباره ما', path: '/about-us'},
        {id: 2, title: 'تماس با ما', path: '/contact-us'},
        {id: 3, title: 'قوانین و مقررات', path: '/rule'},
        {id: 4, title: 'سوالات متداول', path: '/faq'},
    ]
    const accessList = [
        {id: 0, title: 'شال و روسری', path: '/'},
        {id: 1, title: 'مانتو مجلسی', path: '/'},
        {id: 2, title: 'لباس', path: '/'},
        {id: 3, title: 'کفش', path: '/'},
        {id: 4, title: 'کلاه', path: '/'},
    ]

    return (
        <footer className={styles.footer}>
            <div className="inside">
                <div className={styles.container}>
                    <div className={`${styles.column} ${styles.news}`}>
                        <p className={styles.title}>عضویت در خبرنامه:</p>
                        <p className={styles.link}>از جدیدترین اخبار و محصولات ما با خبر شوید</p>
                        <div className={styles.inputContainer}>
                            <input type="text" placeholder='ایمیل'/>
                            <div className='d-flex'><img src={arrowLeft} alt=""/></div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.title}>دسترسی سریع</p>
                        {accessList.map(page => (
                            <Link to={`${page.path}`} className={styles.link} key={page.id}>{page.title}</Link>))}
                    </div>
                    <div className={styles.column}>
                        <p className={styles.title}>راهنما</p>
                        {pageList.map(page => (
                            <Link to={`${page.path}`} className={styles.link} key={page.id}>{page.title}</Link>))}

                    </div>
                    <div className={`${styles.column} ${styles.columnLogoDescription}`}>
                        <img className={styles.logo} src={logo} alt=""/>
                        <p className={styles.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشدجوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.news} ${styles.news2}`}>
                    <p className={styles.title}>عضویت در خبرنامه:</p>
                    <p className={styles.link}>از جدیدترین اخبار و محصولات ما با خبر شوید</p>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder='ایمیل'/>
                        <div className='d-flex'><img src={arrowLeft} alt=""/></div>
                    </div>
                </div>

            </div>

            {/*copyright*/}
            <div className={styles.copyRight}>
                <p>تمام حقوق برای خودم محفوظ است و استفاده از مطالب تنها با ذکر نام خودم و درج لینک مستقیم مجاز
                    است.</p>
            </div>
        </footer>
    )
}
export default Footer
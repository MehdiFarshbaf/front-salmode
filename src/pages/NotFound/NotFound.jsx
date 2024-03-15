// styles
import styles from './NotFound.module.scss'

// image
import imgNotFound from './../../assets/images/404.png'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <img src={imgNotFound} alt=""/>
            <p className={styles.description}>صفحه ای که دنبال آن بودید پیدا نشد.</p>
            <Link to="/" className="btn">بازگشت به خانه</Link>
        </div>
    )
}
export default NotFound
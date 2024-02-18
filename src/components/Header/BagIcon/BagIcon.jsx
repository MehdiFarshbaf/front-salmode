import styles from './BagIcon.module.scss'
import bagImage from '../../../assets/images/bagIcon.svg'

const BagIcon = () => {
    return (
        <div className={styles.container}>
            <img src={bagImage} alt="bag icon"/>
            <div className={styles.badge}><p>2</p></div>
        </div>
    )
}
export default BagIcon
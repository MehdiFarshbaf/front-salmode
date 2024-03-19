// styles
import styles from './HeaderModals.module.scss'

//icons
import backArrow from '../../assets/images/icons/arrowBack.svg'

const HeaderModals = ({title, setShowModal}) => {
    return (
        <section className={styles.container}>
            <img className={styles.arrow} onClick={() => setShowModal(false)} src={backArrow} alt=""/>
            <div className={styles.divPurple}/>
            <div className={styles.divGray}/>
            <p className={styles.title}>{title}</p>
        </section>
    )
}
export default HeaderModals
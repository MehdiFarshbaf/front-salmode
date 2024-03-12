// styles
import styles from './Application.module.scss'

// images
import bazar from '../../../assets/images/app/bazar.png'
import google from '../../../assets/images/app/google play.png'
import sibApp from '../../../assets/images/app/sibapp.png'
import iapps from '../../../assets/images/app/iapps.png'

const Application = () => {
    return (
        <section className={styles.application}>
            <div className="inside">
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img className={styles.mobileImage} src={require('../../../assets/images/app/mobiles.png')}
                             alt=""/>
                    </div>
                    <div className='d-flex-column'>
                        <p className={styles.title}>برای به روز بودن اپلیکشن <span>سال مد</span> را نصب کنید.</p>
                        <div className={styles.buttonsContainer}>
                            <img src={bazar} alt=""/>
                            <img src={google} alt=""/>
                            <img src={sibApp} alt=""/>
                            <img src={iapps} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Application
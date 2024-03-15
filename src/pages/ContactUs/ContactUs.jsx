import PageLayout from "../../layouts/PageLayout/PageLayout";

//styles
import styles from './ContactUs.module.scss'
import {siteInfo} from "../../helpers/data";

//image
import gril from '../../assets/images/grilInContactUs.png'
const ContactUs = () => {

    // variables
    const contacts = siteInfo.filter(item => item.type === 'contact')

    return (
        <PageLayout title="تماس با ما">
            <div className={styles.container}>
                <div className={styles.imageContainer}><img src={gril} alt=""/></div>
                <div className={styles.contact}>
                    {contacts.map(item => (
                        <div className={styles.field} key={item.id}>
                            <p>{item.value}</p>
                            <p className={styles.label}>{item.label}</p>
                            <div className={styles.iconBox}>
                                <img src={item.icon} alt=""/>
                            </div>
                        </div>
                    ))}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5406.215684944489!2d51.37620971602217!3d35.7545148325506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0708ecebab83%3A0x53cfaa9860e66db9!2sBank%20Sepah!5e0!3m2!1sen!2s!4v1710505921139!5m2!1sen!2s"
                         allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
        </PageLayout>
    )
}
export default ContactUs
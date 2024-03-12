import PageLayout from "../../layouts/PageLayout/PageLayout";

// styles
import styles from './FAQPage.module.scss'
import {faqList} from "../../helpers/data";
import FAQItem from "../../components/FAQItem/FAQItem";

const FAQPage = () => {
    return (
        <PageLayout title="سوالات متداول">
            <div className={styles.container}>
                {faqList.map(faq => (
                    <FAQItem key={faq.id} faq={faq}/>
                ))}
            </div>
        </PageLayout>
    )
}
export default FAQPage
import {Collapse} from "@mantine/core";
import {useState} from "react";

// styles
import styles from './FAQItem.module.scss'

//images
import arrow from './arrow.svg'
import question from './question.png'

const FAQItem = ({faq}) => {

    //variables
    const [opened, setOpened] = useState(false)

    return (
        <div key={faq.id} className={styles.container}>
            <div onClick={() => setOpened(!opened)} className={styles.question}>
                <img src={arrow} alt="arrow"
                     className={opened ? `${styles.rotate_arrow} ${styles.arrow_image}` : styles.arrow_image}/>
                <div>
                    <p>{faq.question}</p>
                    <img src={question} alt="question"/>
                </div>
            </div>
            <Collapse in={opened}>
                <p className={styles.answer}>{faq.answer}</p>
            </Collapse>
        </div>
    )
}
export default FAQItem
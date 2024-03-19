import styles from './CollapseFilter.module.scss'
import arrow from './arrow.png'
import {useState} from "react";
import {Collapse} from "@mantine/core";

const CollapseFilter = ({title, children}) => {

    //variables
    const [opened, setOpened] = useState(false)
    return (
        <div className={styles.box}>
            <div className={styles.headerBox} onClick={() => setOpened(!opened)}>
                <img src={arrow} alt="arrow"
                     className={opened ? `${styles.rotate_arrow} ${styles.arrow_image}` : styles.arrow_image}/>
                <p>{title}</p>
            </div>
            <Collapse in={opened}>
                <div className={styles.collapse}>
                    {children}

                </div>
            </Collapse>
        </div>
    )
}
export default CollapseFilter
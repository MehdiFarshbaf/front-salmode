import {Modal, Switch} from "@mantine/core";
import HeaderModals from "../HeaderModals/HeaderModals";
import {Radio} from '@mantine/core';
//styles
import styles from './SortModal.module.scss'
import {useState} from "react";

const SortModal = ({showModal, setShowModal}) => {

    //variables
    const [value, setValue] = useState('value1');

    return (
        <Modal opened={showModal} onClose={() => setShowModal(false)} withCloseButton={false} fullScreen
               classNames={{
                   body: styles.body
               }}
        >
            <HeaderModals setShowModal={setShowModal} title="مرتب سازی"/>
            <div className={styles.container}>
                <Radio.Group>
                    <div className={styles.box}><Radio value="value1"
                                                       classNames={{root: styles.rootRadio, label: styles.labelRadio}}
                                                       color="var(--purple)" label="پرفروش ترین"/></div>
                    <div className={styles.box}><Radio value="value2"
                                                       classNames={{root: styles.rootRadio, label: styles.labelRadio}}
                                                       color="var(--purple)" label="محبوب ترین ها"/></div>
                    <div className={styles.box}><Radio value="value3"
                                                       classNames={{root: styles.rootRadio, label: styles.labelRadio}}
                                                       color="var(--purple)" label="ارزان ترین ها"/></div>
                    <div className={styles.box}><Radio value="value4"
                                                       classNames={{root: styles.rootRadio, label: styles.labelRadio}}
                                                       color="var(--purple)" label="گران ترین ها"/></div>
                </Radio.Group>
                <Switch
                    classNames={{
                        label: styles.switchLabel,
                        root: styles.switchRoot
                    }}
                    color="var(--purple)"
                    label="محصولات موجود"
                />
            </div>

        </Modal>
    )
}
export default SortModal
import {Modal} from "@mantine/core";
import HeaderModals from "../HeaderModals/HeaderModals";

//styles
import styles from './FilterModal.module.scss'

const FilterModal = ({showModal, setShowModal}) => {

    return (
        <Modal opened={showModal} onClose={() => setShowModal(false)} withCloseButton={false} fullScreen
               classNames={{
                   body: styles.body
               }}
        >
            <HeaderModals setShowModal={setShowModal} title="فیلترها"/>
        </Modal>
    )
}
export default FilterModal
import {Checkbox, Modal} from "@mantine/core";
import HeaderModals from "../HeaderModals/HeaderModals";

//styles
import styles from './FilterModal.module.scss'
import CollapseFilter from "../CollapseFilter/CollapseFilter";

const FilterModal = ({showModal, setShowModal}) => {

    return (
        <Modal opened={showModal} onClose={() => setShowModal(false)} withCloseButton={false} fullScreen
               classNames={{
                   body: styles.body
               }}
        >
            <HeaderModals setShowModal={setShowModal} title="فیلترها"/>
            <div className={styles.container}>
                <CollapseFilter title="جنس">
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="جنس 1"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="جنس 2"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="جنس 3"/>
                </CollapseFilter>
                <CollapseFilter title="نوع">
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="نوع 1"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="نوع 2"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="نوع 3"/>
                </CollapseFilter>
                <CollapseFilter title="سایز">
                    <Checkbox color=" var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="کوچیک"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="بزرگ"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="متوسط"/>
                </CollapseFilter>
                <CollapseFilter title="زنگ">
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="قرمز"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="آبی"/>
                    <Checkbox color="var(--purple)" classNames={{
                        root: 'rootCheckbox',
                        label: "labelCheckbox"
                    }} labelPosition="right" label="سبز"/>
                </CollapseFilter>
            </div>
        </Modal>
    )
}
export default FilterModal
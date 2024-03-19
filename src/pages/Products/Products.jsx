// styles
import styles from './Products.module.scss'
import PageLayout from "../../layouts/PageLayout/PageLayout";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {categoryList, productList} from "../../helpers/data";
import ProductCard from "../../components/ProductCard/ProductCard";

import {Checkbox, Switch, Tabs, RangeSlider} from '@mantine/core';

//icons
import sortIcon from './../../assets/images/icons/sort.svg'
import filterIcon from './../../assets/images/icons/filter.svg'

const Products = () => {

    // variables
    const {id} = useParams()
    const [category, setCategory] = useState()

    //functions
    const findCategory = async () => {
        const categoryIs = await categoryList.find(p => p.id == id)
        await setCategory(categoryIs)
    }

    useEffect(() => {
        findCategory()
    }, [id]);

    return (
        <PageLayout title={category?.title}>
            <div className={styles.container}>
                <section>
                    <div className={styles.selectSection}>
                        <Switch
                            className={styles.switch}
                            classNames={{label: styles.switchLabel}}
                            color="var(--purple)"
                            label="محصولات موجود"
                        />
                        <div className={styles.tabs}>
                            <Tabs variant="default" defaultValue="first" color="var(--purple)"
                                  className={styles.tabs} classNames={{tabLabel: styles.tabLabel}}>
                                <Tabs.List>
                                    <Tabs.Tab value="first">جدیدترین</Tabs.Tab>
                                    <Tabs.Tab value="second">محبوب ترین</Tabs.Tab>
                                    <Tabs.Tab value="seco">پرفروش ترین</Tabs.Tab>
                                </Tabs.List>
                            </Tabs>
                        </div>
                        <button><p>مرتب سازی</p><img src={sortIcon} alt=""/></button>
                        <button><p>فیلتر</p><img src={filterIcon} alt=""/></button>
                    </div>
                    {/*show products*/}
                    <div className={styles.containerProducts}>
                        {productList.map(product => (
                            <ProductCard product={product} type="product" />
                        ))}
                    </div>
                </section>
                <section className={styles.filters}>
                    <div className={styles.filterBox}>
                        <p className={styles.filterTitle}>سایز</p>
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
                    </div>
                    <div className={styles.filterBox}>
                        <p className={styles.filterTitle}>نوع</p>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                    </div>
                    <div className={styles.filterBox}>
                        <p className={styles.filterTitle}>جنس</p>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                        <Checkbox color="var(--purple)" classNames={{
                            root: 'rootCheckbox',
                            label: "labelCheckbox"
                        }} labelPosition="right" label="دسته بندی"/>
                    </div>
                    <div className={styles.filterBox}>
                        <p className={styles.filterTitle}>رنگ</p>
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
                    </div>
                    <div className={styles.filterBox}>
                        <p className={styles.filterTitle}>محدودیت قیمت</p>
                        <RangeSlider color='var(--salmode)'/>
                    </div>
                </section>
            </div>
        </PageLayout>
)
}
export default Products
import PageLayout from "../../layouts/PageLayout/PageLayout";

// styles
import styles from './Shop.module.scss'
import {categoryList} from "../../helpers/data";
import CategoryCard from "../../components/HomeComponents/CategoryCard/CategoryCard";

const Shop = () => {
    return (
        <PageLayout title="فروشگاه سال مد">
            <section className={styles.container}>
                {categoryList.map(category=>(
                    <CategoryCard category={category}/>
                ))}
            </section>
        </PageLayout>
    )
}
export default Shop
import styles from './CategoryHome.module.scss'
import CategoryCard from "../CategoryCard/CategoryCard";
import {categoryList} from "../../../helpers/data";

const CategoryHome = () => {
    return (
        <section className={styles.container}>
            <div className={styles.title}><p>دسته بندی سال مد</p></div>
            <div className="inside d-flex">
                <div className={styles.containerCards}>
                    {categoryList.map(category => (
                        <CategoryCard category={category}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default CategoryHome
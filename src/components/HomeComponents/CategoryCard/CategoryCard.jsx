import styles from './CategoryCard.module.scss'
import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {
    return (
        <Link to={`/products/${category.id}`} key={category?.id} className={styles.container}>
            <img src={category.image} alt={category.title}/>
            <div className={styles.title}><p>{category.title}</p></div>
            <div className={styles.cover}><p>{`ورود به دنیای ${category.title}`}</p></div>
        </Link>
    )
}
export default CategoryCard
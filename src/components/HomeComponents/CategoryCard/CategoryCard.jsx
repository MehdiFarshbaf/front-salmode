import styles from './CategoryCard.module.scss'

const CategoryCard = ({category}) => {
    return (
        <div key={category?.id} className={styles.container}>
            <img src={category.image} alt={category.title}/>
            <div className={styles.title}><p>{category.title}</p></div>
            <div className={styles.cover}><p>{`ورود به دنیای ${category.title}`}</p></div>
        </div>
    )
}
export default CategoryCard
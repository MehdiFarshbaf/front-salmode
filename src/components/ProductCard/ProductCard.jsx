//styles
import styles from './ProductCard.module.scss'

const ProductCard = ({product, type = "slider"}) => {
    return (
        <div className={type === "slider" ? styles.card : `${styles.card} ${styles.mobile}`}>
            <div className={styles.imageProduct}>
                {product.discount && type === "slider" &&
                    <div className={styles.discountBox}><p>{`${product.discount}%`}</p></div>}
                <img src={product.image} alt=""/>
            </div>
            <div className={styles.content}>
                <div className='relative w-100'>
                    {!product.discount &&
                        <p className={styles.price}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
                    {product.discount &&
                        <p className={styles.discount}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
                    {product.discount &&
                        <p className={styles.newPrice}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
                    {product.discount && type === "product" &&
                        <div className={styles.discountBoxMobile}><p>{`${product.discount}%`}</p></div>}
                </div>
                <div>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.color}>رنگ : <span>سبز</span></p>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
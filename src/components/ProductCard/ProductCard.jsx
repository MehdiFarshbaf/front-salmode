//styles
import styles from './ProductCard.module.scss'

const ProductCard = ({product}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageProduct}>
                {product.discount && <div className={styles.discountBox}><p>{`${product.discount}%`}</p></div>}
                <img src={product.image} alt=""/>
            </div>
            <div className={styles.content}>
                <div>
                    {!product.discount && <p className={styles.price}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
                    {product.discount && <p className={styles.discount}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
                    {product.discount && <p className={styles.newPrice}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
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
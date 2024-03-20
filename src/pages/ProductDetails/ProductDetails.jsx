import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productList} from "../../helpers/data";
import {changePageTitle} from "../../helpers/functions";
import {Rating} from "@mantine/core";

// styles
import styles from './ProductDetails.module.scss'

//icons
import favIcon from '../../assets/images/icons/fav.svg'
import shareIcon from '../../assets/images/icons/share.svg'

//images
import bannerImages from './../../assets/images/bannerProduct.png'
import SliderProductDetails from "../../components/SliderProductDetails/SliderProductDetails";

const ProductDetails = () => {

    //variables
    const {id} = useParams()
    const [product, setProduct] = useState({})

    //functions
    const findProduct = async () => {
        const obj = await productList.find(p => p.id == id)
        await setProduct(obj)
        changePageTitle(obj.name)
    }

    useEffect(() => {
        findProduct()
    }, [id]);

    return (
        <section className={styles.page}>
            <div className="inside">
                <div className={styles.container}>
                    <div className='w-100'>
                        <div className={styles.details}>
                            <div>
                                {product.discount &&
                                    <p className={styles.discount}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>}
                                <p className={styles.price}>{`${parseInt(product.price).toLocaleString()} تومان`}</p>
                            </div>
                            <div>
                                <p className={styles.name}>{product?.name}</p>
                                <p className={styles.code}>کد 72</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <Rating value={product.rate}/>
                            <p>برند: سال مد</p>
                            <p>دسته بندی: کیف</p>
                        </div>
                        <p className={styles.textDescription}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                            کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،</p>
                        <div className={styles.containerButtons}>
                            <button><img src={favIcon} alt=""/></button>
                            <button>افزودن به سبد خرید</button>
                            <button><img src={shareIcon} alt=""/></button>
                        </div>
                        <p className={styles.name}>توضیحات</p>
                        <p className={styles.textDescription}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                            و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                            کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،</p>
                    </div>
                    <div className="w-100">
                        <img src={bannerImages} className={styles.banner} alt=""/>
                        <SliderProductDetails/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductDetails
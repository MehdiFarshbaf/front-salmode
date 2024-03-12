import imgCategory from './../assets/images/category.png'
import imgProduct from './../assets/images/product.png'

export const navList = [
    {id: 0, label: 'درباره ما', path: 'about-us'},
    {id: 1, label: 'تماس با ما', path: '/contact-us'},
    {id: 2, label: 'فروشگاه', path: '/shop'},
    {id: 3, label: 'خانه', path: '/'},
    {id: 4, label: 'سوالات متداول', path: '/faq'}
]
export const categoryList = [
    {id: 0, image: imgCategory, title: 'مانتو', subCategory: ['کاپشن', 'پالتو', 'بارانی', 'کت']},
    {id: 1, image: imgCategory, title: 'کفش', subCategory: ['تخت', 'صندل', 'نیم بوت', 'کتونی']},
    {id: 2, image: imgCategory, title: 'کیف', subCategory: ['دستی', 'کوله', 'دوشی']},
    {id: 3, image: imgCategory, title: 'شال و کلاه', subCategory: ['شال گردن', 'شلوارک', 'شلوار', 'هودی', 'شومیز']},
    {id: 4, image: imgCategory, title: 'لباس', subCategory: ['شال گردن', 'شلوارک', 'شلوار', 'هودی', 'شومیز']},
    {id: 5, image: imgCategory, title: 'شال و روسری', subCategory: ['شال گردن', 'شلوارک', 'شلوار', 'هودی', 'شومیز']},
]

export const productList = [
    {id: 0, name: "مانتو زنانه", image: imgProduct, price: 1200000, discount: 15},
    {id: 1, name: "مانتو زنانه", image: imgProduct, price: 1260000},
    {id: 2, name: "مانتو زنانه", image: imgProduct, price: 1200000},
    {id: 3, name: "مانتو زنانه", image: imgProduct, price: 1200000, discount: 20},
    {id: 4, name: "مانتو زنانه", image: imgProduct, price: 1200000},
    {id: 4, name: "مانتو زنانه", image: imgProduct, price: 850000, discount: 40},
    {id: 4, name: "مانتو زنانه", image: imgProduct, price: 1200000, discount: 15},
    {id: 4, name: "مانتو زنانه", image: imgProduct, price: 1400000, discount: 50},
    {id: 4, name: "مانتو زنانه", image: imgProduct, price: 200000, discount: 70},
    {id: 5, name: "مانتو زنانه", image: imgProduct, price: 1200000},
    {id: 6, name: "مانتو زنانه", image: imgProduct, price: 778000},
]
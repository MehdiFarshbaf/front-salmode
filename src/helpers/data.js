import imgCategory from './../assets/images/category.png'
import imgProduct from './../assets/images/product.png'

// icons
import facebookIcon from './../assets/images/icons/facebook.svg'
import twitterIcon from './../assets/images/icons/twitter.svg'
import instagramIcon from './../assets/images/icons/instagram.svg'
import phoneIcon from './../assets/images/icons/phone.svg'
import emailIcon from './../assets/images/icons/email.svg'
import locationIcon from './../assets/images/icons/location.svg'

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

export const faqList = [
    {
        id: 0,
        question: "چگونه ثبت نام کنیم؟",
        answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
    },
    {
        id: 1,
        question: "چگونه خرید کنیم؟",
        answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 2,
        question: "تخفیفات چگونه اعمال میشوند؟",
        answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    },
    {
        id: 3,
        question: "تغییر آدرس چگونه است؟",
        answer: "خالد حسینی تو رمان باد بادک باز مینویسه : ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮﺩ : ” ﭘﺴﺮﻡ ﺩﺭ ﺯﻧﺪﮔﯽ ﻫﺮﮔﺰ ﺩﺯﺩﯼ ﻧﮑﻦ ” ﭘﺴﺮ ﻣﺘﻌﺠﺐ ﻭ ﻣﺒﻬﻮﺕ ﺑﻪ ﭘﺪﺭ ﻧﮕﺎﻩ ﮐﺮﺩ ﺑﺪﯾﻦ ﻣﻌﻨﺎ ﮐﻪ ﺍﻭ ﻫﺮﮔﺰ ﺩﺳﺖ ﮐﺞ ﻧﺪﺍﺷﺘﻪ ﭘﺪﺭ ﺑﻪ ﻧﮕﺎﻩ ﻣﺘﻌﺠﺐ ﻓﺮﺯﻧﺪ ﻟﺒﺨﻨﺪﯼ ﺯﺩ ﻭ ﺍﺩﺍﻣﻪ ﺩﺍﺩ : ﺩﺭ ﺯﻧﺪﮔﯽ ﺩﺭﻭﻍ ﻧﮕﻮ ﭼﺮﺍ ﮐﻪ ﺍﮔﺮ ﮔﻔﺘﯽ ﺻﺪﺍﻗﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﯿﺎﻧﺖ ﻧﮑﻦ ﮐﻪ ﺍﮔﺮ ﮐﺮﺩﯼ ﻋﺸﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﺸﻮﻧﺖ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﻣﺤﺒﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﻧﺎ ﺣﻖ ﻧﮕﻮ ﺍﮔﺮ ﮔﻔﺘﯽ ﺣﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺑﯽ ﺣﯿﺎﯾﯽ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﺷﺮﺍﻓﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍی... ﭘﺲ ﺩﺭ ﺯﻧﺪﮔﯽ ﻓﻘﻂ ﺩﺯﺩﯼ نکن !"
    },
]

export const siteInfo = [
    {id: 0, name: 'phone', label: 'تلفن تماس', value: '02156869349', type: 'contact', icon: phoneIcon},
    {id: 0, name: 'email', label: 'ایمیل', value: 'mehdiFarshbaf@gmail.com', type: 'contact', icon: emailIcon},
    {id: 0, name: 'address', label: 'آدرس', value: 'تهران، درب قرمز', type: 'contact', icon: locationIcon},
    {id: 0, name: 'facebook', label: 'فیس بوک', value: 'mehdiFarshbaf', type: 'social', icon: facebookIcon},
    {id: 0, name: 'instagram', label: 'اینستاگرام', value: 'mehdiFarshbaf', type: 'social', icon: instagramIcon},
    {id: 0, name: 'twitter', label: 'تویینر', value: 'mehdiFarshbaf', type: 'social', icon: twitterIcon},
]
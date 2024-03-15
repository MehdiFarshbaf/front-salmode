import BannerSwiper from "../../components/HomeComponents/BannerSwiper/BannerSwiper";
import CategoryHome from "../../components/HomeComponents/CategoryHome/CategoryHome";
import WinterSale from "../../components/HomeComponents/WinterSale/WinterSale";
import Offer from "../../components/HomeComponents/Offer/Offer";
import BestSelling from "../../components/HomeComponents/BestSelling/BestSelling";
import Application from "../../components/HomeComponents/Application/Application";

import {changePageTitle} from "../../helpers/functions";

const Home = () => {

    changePageTitle("صفحه اصلی")

    return (
        <>
            <BannerSwiper/>
            <CategoryHome/>
            <WinterSale/>
            <Offer/>
            <BestSelling/>
            <Application/>
        </>

    )
}
export default Home
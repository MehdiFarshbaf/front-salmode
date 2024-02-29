import BannerSwiper from "../../components/HomeComponents/BannerSwiper/BannerSwiper";
import CategoryHome from "../../components/HomeComponents/CategoryHome/CategoryHome";
import WinterSale from "../../components/HomeComponents/WinterSale/WinterSale";
import Offer from "../../components/HomeComponents/Offer/Offer";
import BestSelling from "../../components/HomeComponents/BestSelling/BestSelling";

const Home = () => {
    return (
        <>
            <BannerSwiper/>
            <CategoryHome/>
            <WinterSale/>
            <Offer/>
            <BestSelling/>
        </>

    )
}
export default Home
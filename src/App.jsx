import MainLayout from "./layouts/MainLayout/MainLayout";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import FAQPage from "./pages/FAQ/FAQPage";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import ContactUs from "./pages/ContactUs/ContactUs";
import Rules from "./pages/Rules/Rules";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Products/Products";

const App = () => {
    return (
        <ScrollToTop>
            <MainLayout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/faq' element={<FAQPage/>}/>
                    <Route path='/about-us' element={<AboutUs/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/contact-us' element={<ContactUs/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/rule' element={<Rules/>}/>
                    <Route path='/products/:id' element={<Products/>}/>
                    <Route path='*' element={<NotFound/>}/>

                </Routes>
            </MainLayout>
        </ScrollToTop>
    )
}
export default App
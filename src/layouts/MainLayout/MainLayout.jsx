import styles from './MainLayout.module.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = ({children}) => {

    return (
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}
export default MainLayout
import styles from './MainLayout.module.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";

const MainLayout = ({children}) => {

    const location = useLocation()
    const {pathname} = location



    return (
        <main className={styles.main}>
            <Header/>
            {children}
            {pathname !=='/login' && <Footer/>}
        </main>
    )
}
export default MainLayout
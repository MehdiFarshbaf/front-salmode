import styles from './MainLayout.module.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";

const MainLayout = ({children}) => {

    const location = useLocation()
    const {pathname} = location


    return (
        <>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            {pathname !== '/login' && <Footer/>}
        </>
    )
}
export default MainLayout
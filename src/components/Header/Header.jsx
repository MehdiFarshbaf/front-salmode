import styles from './Header.module.scss'
import BagIcon from "./BagIcon/BagIcon"
import {Link, NavLink} from "react-router-dom"

import logo from '../../assets/images/logo.png'
import searchIcon from '../../../src/assets/images/search.svg'
import {ReactComponent as CategoryIcon} from "./categoryIcon.svg";

import {navList} from "../../helpers/data";
import CategoryMenu from "./Category/CategoryMenu";
import {useState} from "react";
import MobileHeader from "./MobileHeader/MobileHeader";

const Header = () => {

    //variables
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className={styles.header}>
            <div className="inside">
                <div className={styles.topHeader}>
                    <div className={styles.left}>
                        <Link to='/login' className='btn'>ورود/ثبت نام</Link>
                        <BagIcon/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.input}>
                            <input type="text" placeholder="جستجو در سال مد"/>
                            <img src={searchIcon} alt="search icon"/>
                        </div>
                        <Link to='/'><img src={logo} alt="logo image"/></Link>
                    </div>
                </div>
                <nav className={styles.navbar}>
                    {navList.map(link => (
                        <NavLink
                            className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
                            key={link.id} to={link.path}>{link.label}</NavLink>
                    ))}
                    <div className={styles.category} onClick={() => setShowMenu(!showMenu)}>
                        <p>دسته بندی</p>
                        <CategoryIcon/>
                    </div>
                </nav>
                <MobileHeader/>
            </div>
            {showMenu && <CategoryMenu setShowMenu={setShowMenu}/>}
        </header>
    )
}
export default Header
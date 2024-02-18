import styles from './MobileHeader.module.scss'
import {Link} from "react-router-dom";
import BagIcon from "../BagIcon/BagIcon";
import hamburgerIcon from '../../../assets/images/hamburger.svg'
import {useState} from "react";
import {useClickOutside} from '@mantine/hooks';
import {navList} from "../../../helpers/data";

const MobileHeader = () => {

    const [showMenu, setShowMenu] = useState(false)
    const ref = useClickOutside(() => setShowMenu(false));

    return (
        <div className={styles.container}>
            <BagIcon/>
            <Link to='/'><img src={require('./../../../assets/images/logo.png')} alt=""/></Link>
            <img onClick={() => setShowMenu(!showMenu)} src={hamburgerIcon} alt=""/>
            <nav ref={ref} className={showMenu ? `${styles.menu} ${styles.activeMobile}` : styles.menu}>
                <Link onClick={()=>setShowMenu(false)} to="/" className={styles.menuItem}><p>دسته بندی</p></Link>
                {navList.reverse().map(menu => (
                    <Link onClick={()=>setShowMenu(false)} to={menu.path} className={styles.menuItem}><p>{menu.label}</p></Link>
                ))}
            </nav>
        </div>
    )
}
export default MobileHeader
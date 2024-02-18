import styles from './CategoryMenu.module.scss'
import {useClickOutside} from '@mantine/hooks'
import {categoryList} from "../../../helpers/data";

const CategoryMenu = ({setShowMenu}) => {

    const ref = useClickOutside(() => setShowMenu(false));

    return (
        <div ref={ref} className={styles.categoryMenu}>
            <div className={styles.main}>
                <img src={require('./background.png')} alt=""/>
                <div className="inside">
                    <div className={styles.container}>
                        {categoryList.map(menu => (
                            <div className={styles.col} key={menu.id}>
                                <p className={styles.title}>{menu.title}</p>
                                <div className={styles.containerSubmenu}>
                                    {menu.subCategory.map(subTitle => (
                                        <p>{subTitle}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryMenu
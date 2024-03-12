// styles
import styles from './PageLayout.module.scss'

const PageLayout = ({children, title}) => {
    return (
        <div className={styles.container}>
            <div className="title"><p>{title}</p></div>
            <div className={styles.content}>
                <div className="inside">
                    {children}
                </div>
            </div>

        </div>
    )

}
export default PageLayout
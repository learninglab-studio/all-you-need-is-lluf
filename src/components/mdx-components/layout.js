import styles from "./layout.module.css"


export default (props)=> {
    return (
        <div className={styles.layout}>{props.children}</div>
    )
}
import styles from "./Input.module.css"

function Input({type, text, name, placheholder, handleOnChange,value}){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placheholder} onChange={handleOnChange} />
        </div>
    )
}

export default Input
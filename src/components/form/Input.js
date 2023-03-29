import styles from './Input.module.css'

function Input({type, text, name, placeholdeer, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholdeer} 
                onChange={handleOnChange} 
                value={value}
            />
        </div>
    )
}

export default Input;
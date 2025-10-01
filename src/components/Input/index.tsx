import clsx from "clsx"
import type { InputProps } from "./interfaces"
import styles from "./Input.module.css"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"


const Input = ({ name, type, label, placeholder, className }: InputProps) => {
    const [hidePassword, setHidePassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    const handleEyeClick = () => {
        setHidePassword((prevState) => !prevState)
        if (type === 'password' && !hidePassword) {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }



    return (
        <label htmlFor="name" className={clsx(styles.label, className)}>
            <div className="mb-3">{label}</div>

            <input
                type={inputType}
                name={name}
                id={name}
                placeholder={placeholder}
                className={styles.input}
            />

            {type === "password" ? (
                <button type="button" className={styles.eye} onClick={handleEyeClick}>
                    {hidePassword ? (
                        <FaEyeSlash className="h-6 w-6 text-gray-100" />
                    ) : (
                        <FaEye className="h-6 w-6 text-gray-100" />
                    )}
                </button>
            ) : null}

        </label>
    )
}

export default Input
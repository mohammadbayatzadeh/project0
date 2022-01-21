import React from 'react'

//styels
import styles from "./Company.module.css"

//icons
import image from "../assets/icons/office.svg"

export default function Company({title}) {
    return (
        <div className={styles.container} >
            <img  src={image} className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}

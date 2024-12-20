import { FC } from "react"
import styles from "./Ui.module.scss"

interface IButonText{
    words:string;
    width:string;
    onClick:()=>void
}


 export const RedButton:FC<IButonText> = ({words, width, onClick})=>{

    return (
        <button onClick={onClick} style={{width: width, color:"#fff"}} className={styles.redButton}>
        {words}
        </button>
    )
}

import { Link } from "react-router-dom"
import AppleIcon from "./../../assets/Apple_gray.svg"
import ArrowRight from "assets/arrow-right.svg"
import IPhoneImage from "assets/iphone-img.jpg"
import styles from "./slider.module.scss"


 export const Slider = ()=>{

    return(
        <div className={styles.slider}>
            <div className={styles.sliderText}>
                <div className={styles.sliderTextHeader}>
                <AppleIcon/>
                <span> Iphone 16 Series</span>
                </div>
                <h1 style={{fontSize:"48px"}}> Up to 10% off Voucher</h1>
                <Link className={styles.shopLink} to={"/shop"}>Shop now  <ArrowRight/></Link>
            </div>
            <div className={styles.iphoneImg}>
            <img style={{marginTop:"16px", width:"100%"}} src={IPhoneImage} alt="iphone-img" />
            </div>
        </div>
    )
}
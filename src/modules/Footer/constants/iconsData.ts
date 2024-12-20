
import GooglePlay from "./../../../assets/footer_icons/GooglePlay.svg";
import AppStore from "./../../../assets/footer_icons/AppStore.svg";
import Facebook from "./../../../assets/footer_icons/Icon-Facebook.svg";
import Twitter from "./../../../assets/footer_icons/Icon-Twitter.svg";
import Instagram from "./../../../assets/footer_icons/icon-instagram.svg";
import Linkedin from "./../../../assets/footer_icons/Icon-Linkedin.svg";


export const accountLinks = [
{  
    page:"My Account",
    to:"/" 
},
{  
    page:"Login/Register",
    to:"/register" 
},

{  
    page:"Cart",
    to:"/cart" 
},

{  
    page:"WhiteList",
    to:"/whitelist" 
},
{  
    page:"Shop",
    to:"/shop" 
},
]


export const socialLinks = [
    {
        src: Facebook,
        to: "https://www.facebook.com/",
        alt: "facebook"
    },

    {
        src: Twitter,
        to: "https://www.twitter.com/",
        alt: "twitter"
    },

    {
        src: Instagram,
        to: "https://www.instagram.com/",
        alt: "instagram"
    },

    {
        src: Linkedin,
        to: "https://www.linkedin.com/",
        alt: "linkedin"
    },
]

export const appStores = [
    {
        src: GooglePlay,
        to: "https://play.google.com/",
        alt: "googlePlay"
    },
    {
        src: AppStore,
        to: "https://www.apple.com/de/app-store/",
        alt: "appStore"
    }
]
export const stores = [AppStore, GooglePlay]
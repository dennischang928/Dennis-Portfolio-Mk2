import React from "react";
import styles from "./Contact.module.css"
const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <a href="https://github.com/dennischang928" target="_blank"><img loading="lazy" src={require("../Images/github-brands 1.svg").default} alt="" /></a>
                    <a href="https://www.linkedin.com/in/dennischang928/" target="_blank"><img loading="lazy" src={require("../Images/linkedin-brands.svg").default} alt="" /></a>
                    <a href="https://www.facebook.com/dennis.chang.1428921/" target="_blank"><img loading="lazy" src={require("../Images/facebook-brands 1.svg").default} alt="" /></a>
                    <a href="https://instagram.com/dennis.s.chon/" target="_blank"><img loading="lazy" src={require("../Images/instagram-brands 1.svg").default} alt="" /></a>
                </div>
                <div className={styles.copyright}>
                    ©2025 by Dennis, Seng Chon Chang
                </div>
            </div>
        </div>
    )
}

export default Contact
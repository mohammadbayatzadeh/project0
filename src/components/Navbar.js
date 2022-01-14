import React from 'react';

//styles
import styles from "./Navbar.module.css"

//icons
import profile from "../assets/icons/male.svg"
import bell from "../assets/icons/bell.svg"
import chat from "../assets/icons/chat.svg"
import magnifier from "../assets/icons/magnifier.svg"



const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.profile}>
                <img src={profile} alt="profile" />
                <div className={styles.text}>
                    <h3>پیشرو نت انرژی</h3>
                    <h4>پشتیبانی</h4>
                </div>
            </div>
            <img className={styles.chat} src={chat} alt="chat" />
            <img className={styles.bell} src={bell} alt="bell" />
            <div className={styles.searchbar}>
                <img src={magnifier} alt="magnifier" />
                <input type="text" />
            </div>
        </div>
    );
};

export default Navbar;
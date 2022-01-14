import React from 'react';
import { Link } from "react-router-dom"

//styles
import styles from "./Sidebar.module.css"
import office from "../assets/icons/office.svg"
import office0 from "../assets/icons/office 0.svg"

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.head}>
                <img src={office} alt="office" />
                <div className={styles.text}> 
                <h3>پنــل مدیریت</h3>
                <h4>متنـــــا</h4>
                </div>
            </div>
            <div className={styles.items}>
                <Link to="/companies" className={styles.item}><img src={office0} alt="office" />شرکت ها</Link>
                <Link to="/desk" className={styles.item}><img src={office0} alt="office" />میز کار</Link>
                <Link to="/users" className={styles.item}><img src={office0} alt="office" />کاربران</Link>
                <Link to="/joblist" className={styles.item}><img src={office0} alt="office" />لیست کار ها</Link>
                <Link to="/database" className={styles.item}><img src={office0} alt="office" />پایگاه داده ها</Link>
                <Link to="/report" className={styles.item}><img src={office0} alt="office" />گزارش چک لیست</Link>
                <Link to="/matnaboard" className={styles.item}><img src={office0} alt="office" />برد متنا</Link>
                <Link to="/contacts" className={styles.item}><img src={office0} alt="office" />مخاطبین</Link>
                <Link to="/barcode" className={styles.item}><img src={office0} alt="office" />بارکدخوان</Link>
                <Link to="/getbarcode" className={styles.item}><img src={office0} alt="office" />دریافت بارکد</Link>
                <Link to="/support" className={styles.item}><img src={office0} alt="office" />پشتیبانی</Link>
                <Link to="/profile" className={styles.item}><img src={office0} alt="office" />پروفایل</Link>
                <Link to="/history" className={styles.item}><img src={office0} alt="office" />تاریخچه فرمان</Link>
                <Link to="/settings" className={styles.item}><img src={office0} alt="office" />تنظیمات</Link>
                <Link to="/" className={styles.item}><img src={office0} alt="office" />خروج</Link>
            </div>
        </div>
    );
};

export default Sidebar;
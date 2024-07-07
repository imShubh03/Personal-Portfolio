import React from "react";
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Aside = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img
                        src={"/images/mey.jpg"}
                        alt="Richard hanrick"
                        width="80"
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">
                        Shubham Sonake
                    </h1>

                    <p className="title">Web developer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>

                    <GiClawSlashes />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMailbox />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:shubhamsonake307@gmail.com" className="contact-link">
                            shubhamsonake307@gmail.com
                            </a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiPhone />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+91-8208364674" className="contact-link">
                                +91-8208364674
                            </a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiCalendar />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2003-10-03">Oct 03, 2003</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <GiMayanPyramid />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Maharashtra, India</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Aside;

import React from "react";
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { MdOutlineContactPage } from "react-icons/md";

const Aside = () => {
    return (
        <div className="sidebar mt-0">
            <div className="sidebar-info mb-4">
                <figure className="avatar-box">
                    <img
                        src={"/images/Shubham.jpg"}
                        alt="Richard Hanrick"
                        width="80"
                        className=" border-blue-50" /* This will be overridden by the CSS */
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Richard Hanrick">
                        Shubham Sonake
                    </h1>

                    <p className="title">Fullstack Developer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>

                    <GiClawSlashes />
                </button>
            </div>

            <hr />



            <div className=" my-4">
                <h3 className="text-white ml-7 mb-3 font-thin text-xs mb-2">Connect withme over👇 </h3>
                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/shubham-sonake-410241231" className="social-link">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/imShubh03" className="social-link">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.instagram.com/shubham17?igsh=MTdlaGpjeTR6NzQ1aw==" className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://x.com/Shubham3102003?s=08" className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>

            <hr />

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
                    <a href="https://drive.google.com/file/d/1-l2Nif3V1kJoPRcrRLOukN0y53jvK1wR/view?usp=drive_link">
                        <li className="contact-item">
                            <div className="icon-box">
                                <MdOutlineContactPage />

                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Resume</p>
                                <time dateTime="2003-10-03"> Click to See My CV</time>
                            </div>
                        </li>
                    </a>

                </ul>

            </div>
        </div>
    );
}

export default Aside;

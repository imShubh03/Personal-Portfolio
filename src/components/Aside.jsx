import React from "react";
import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { MdOutlineContactPage } from "react-icons/md";
import Socials from "./Socials";

const Aside = () => {
    return (
        <div className="sidebar mt-0">
            <div className="sidebar-info mb-4">
                <figure className="avatar-box">
                    <img
                        src={"/images/Shubham.jpg"}
                        alt="Shubham Sonake"
                        width="80"
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name text-2xl" title="Shubham Sonake">
                        Shubham Sonake
                    </h1>

                    <p className="title bg-slate-700">Fullstack Developer</p>
                </div>

                <button className="info_more-btn " data-sidebar-btn>
                    <span>Show Contacts</span>

                    <div className="hidden lg:block">
                        <GiClawSlashes />
                    </div>

                    <div className="block lg:hidden">
                        <Socials />
                    </div>
                </button>
            </div>

            <hr />

            <div className=" my-4">
                <h3 className="text-white ml-7 font-thin text-xs mb-2">Connect with me over👇 </h3>
                <Socials />
            </div>

            <hr />

            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <a href="https://drive.google.com/file/d/1Jd8RElFwQjRv-OIELhTgJOtWaVfwvZyO/view?usp=sharing">
                        <li className="contact-item">
                            <div className="icon-box">
                                <MdOutlineContactPage />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Resume</p>
                                <p className=" text-xs text-white font-thin"> Click to See My CV</p>
                            </div>
                        </li>
                    </a>
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


                </ul>

            </div>
        </div>
    );
}

export default Aside;

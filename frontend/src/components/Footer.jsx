import React from "react";
import logo from "../images/YTI_logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
    return(
        <div className="bg-night font-ubuntu px-32 text-sea text-start py-10 lg:flex md:flex ">
            <div className="flex-1">
                <div>
                    Contact: 
                </div>
                <div className="">
                    youth.tunes.music@gmail.com <br />
                    908-873-2857
                </div>
            </div>
            <div className="flex-1">
                <div className="flex">
                <a href=""><FaSquareFacebook className="mr-2"/></a>
                <a href="https://www.instagram.com/youth_tunes/" target="_blank"><FaInstagram className="mr-2"/></a>
                <a href=""><IoLogoYoutube  className="mr-2"/></a>
                </div>
                Facebook Upcoming <br />
                YouTube Upcoming
            </div>
            <div className="">
                <img src={logo} alt="logo" className="h-20 my-1"/>
            </div>
        </div>
    )
}

export default Footer;
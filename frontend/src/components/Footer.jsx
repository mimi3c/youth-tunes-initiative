import React from "react";
import logo from "../images/YTI_logo.svg";

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
                Instagram Upcoming <br />
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
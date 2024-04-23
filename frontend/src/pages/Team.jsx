import React from "react";
import profilelist from "../components/profilelist";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import TeamHeader from "../images/hillside2.png";

const Team = () => {
    
    ScrollToTop();
    
    return(
        <div className="">
            <div className="lg:h-[100vh] md:h-[100vh] lg:flex md:flex bg-night">
                <div className="flex-1 text-center grid py-20 pt-32 lg:py-0 md:py-0 lg:pt-0 md:pt-0">
                    <h1 className="text-sea font-shrikhand text-5xl self-end">
                        OUR TEAM
                    </h1>
                    <p className="text-white w-3/6 font-ubuntu font-normal mx-auto self-start">
                        <br />
                        Youth Tunes Initiative workshops are conducted by passionate volunteers 
                        who are experienced in various musical fields, including voice, dance, 
                        instruments, and music theory.
                        <br /><br />
                        Our team members are always eager to help out and share their knowledge 
                        with aspiring musicians.
                    </p>
                </div>
                <div className="flex-1">
                    <img src={TeamHeader} alt="" className="bg-black w-full h-[100vh] object-cover"/>
                </div>
            </div>
            <div className="bg-white grid w-full justify-self-center lg:grid-cols-3 md:grid-cols-2 pt-20">
                {profilelist.map((profile, index) => {
                        return(
                            <div className="m-5 mx-10 text-center">
                                <div className="grid">
                                    <img src={profilelist[index].image} alt={profilelist[index].name} loading="lazy" className="w-80 h-80 bg-black rounded-3xl justify-self-center border-4 border-sea"/>
                                </div>
                                <div className="align-top">
                                    <h1 className="font-rokkitt text-3xl pt-3 font-bold text-orange p-1">{profilelist[index].name}</h1>
                                    <p className="font-ubuntu">{profilelist[index].desc}</p>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
            <div className="flex justify-center items-center h-1/3 w-full">  
                <Link to="/contact">
                    <button className="bg-night text-white font-ubuntu rounded-3xl my-10 mt-20 p-5 px-10 justify-self-center w-max-content" onClick={() => {}}>
                        Join our team
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Team;
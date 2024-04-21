import React from "react";
import profilelist from "../components/profilelist";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const Team = () => {
    
    ScrollToTop();
    
    return(
        <div className="grid">
            <div className="bg-black justify-center h-[92vh] items-center flex-col flex">
                <div className="absolute w-full h-[92vh] overflow-clip">
                    <img src="" alt="" className="opacity-80 w-full h-full object-cover"/>
                </div>
                <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">
                    OUR TEAM
                </h1>
                <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
                    <br />
                    Explore our platform to discover engaging projects that focus on bringing the 
                    transformative gift of music to children in various communities.
                </p>
            </div>
            <div className="bg-white grid w-full justify-self-center lg:grid-cols-3 md:grid-cols-2 pt-20">
                {profilelist.map((profile, index) => {
                        return(
                            <div className="m-5 mx-10 text-center">
                                <div className="grid">
                                    <img src={profilelist[index].image} alt={profilelist[index].name} className="w-80 h-80 bg-black rounded-3xl justify-self-center"/>
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
                <Link to="/impact">
                    <button className="bg-night text-white font-ubuntu rounded-3xl my-10 mt-20 p-5 px-10 justify-self-center w-max-content" onClick={() => {}}>
                        Join our team
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Team;
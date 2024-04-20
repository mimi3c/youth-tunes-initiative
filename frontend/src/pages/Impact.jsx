import React from 'react';
import webvid from "../images/webvid.mp4";

const Impact = () => {
  return (
    <div className="impact-page">
        <div className="bg-black justify-center h-[92vh] items-center flex-col flex">
                        <div className="absolute w-full h-[92vh] overflow-clip">
                            {/*<img src="" alt="" className="opacity-80 w-full h-full object-cover"/>*/}
                            <video src={webvid} className="opacity-80 w-full h-full object-cover" autoPlay muted loop></video>
                        </div>
                        <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">
                            OUR IMPACT
                        </h1>
                        <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
                            <br />
                            Explore our platform to discover engaging projects that focus on bringing the 
                            transformative gift of music to children in various communities.
                        </p>
                    </div>      
            </div>
  );
};

export default Impact;

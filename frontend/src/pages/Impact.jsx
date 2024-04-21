import React, { useEffect } from 'react';
import webvid from "../images/webvid.mp4";
import PercussionK from "../images/PercussionImpact.jpg";
import ScrollToTop from "../components/ScrollToTop";


const ImageTextBlock = ({ src, text }) => (
  <div className="mb-4 md:mb-0 text-center"> {/* Add margin for vertical stacking */}
    <div className="grid">
      <img src={src} alt={text} className="w-80 h-80 bg-black rounded-3xl justify-self-center" />
    </div>
    <div className="align-top">
      <p className="font-ubuntu text-orange text-center">{text}</p> {/* Centered text */}
    </div>
  </div>
);

const Impact = () => {
  ScrollToTop()
return(
  <div className="impact-page">

    <div className="bg-black justify-center h-[92vh] items-center flex-col flex">
      <div className="absolute w-full h-[92vh] overflow-clip">
        <video src={webvid} className="opacity-80 w-full h-full object-cover" autoPlay muted loop />
      </div>
      <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">OUR IMPACT</h1>
      <br />
      <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
        Our music programs are great ways to increase interest in music for kids. 
        View successful past programs. 
      </p>
    </div>
    <div style={{ height: '50px' }} /> {/* Spacer with specified height */}
    {/* Content sections */}
    <div className="m-5 mx-10 text-center flex flex-col md:flex-row justify-around">
      <ImageTextBlock src={PercussionK} text="Percussion Impact" />
      <ImageTextBlock src={""} text="Image 1" />
      <ImageTextBlock src={""} text="Image 2" />
    </div>

    <div className="grid text-center">
      <img src={""} alt={"Large Image"} className="w-5/6 h-80 bg-black rounded-3xl justify-self-center" />
      <p className="font-ubuntu text-orange">Large Image Text</p>
    </div>

    <div className="m-5 mx-10 text-center flex flex-col md:flex-row justify-around">
      <ImageTextBlock src={PercussionK} text="Percussion Impact" />
      <ImageTextBlock src={""} text="Image 1" />
      <ImageTextBlock src={""} text="Image 2" />
    </div>

    <div className="flex flex-col md:flex-row justify-around">
      <ImageTextBlock src={""} text="Another Image 1" />
      <ImageTextBlock src={""} text="Another Image 2" />
    </div>
  </div>
);
};

export default Impact;

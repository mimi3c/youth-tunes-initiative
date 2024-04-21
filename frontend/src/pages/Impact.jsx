import React from 'react';
import webvid from "../images/webvid.mp4";
import PercussionK from "../images/PercussionImpact.jpg";
import ScrollToTop from '../components/ScrollToTop';

const ImageTextBlock = ({ src, text, desc }) => (
  <div className="my-5 text-center"> {/* Add margin for vertical stacking */}
    <div className="grid">
      <img src={src} alt={text} className="border-4 border-night w-80 h-80 bg-black rounded-3xl justify-self-center object-cover" />
    </div>
    <div className="align-top">
      <h1 className="font-rokkitt font-bold text-2xl mt-3 text-orange text-center">{text}</h1> {/* Centered text */}
      <p className='font-ubuntu'>
        {desc}
      </p>
    </div>
  </div>
);

const Impact = () => {
  
  //ScrollToTop();

  return(
    <div className="impact-page">

      <div className="bg-black justify-center h-[92vh] items-center flex-col flex">
        <div className="absolute w-full h-[92vh] overflow-clip">
          <video src={webvid} className="opacity-80 w-full h-full object-cover" autoPlay muted loop />
        </div>
        <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">OUR IMPACT</h1>
        <br />
        <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
          Explore our platform to discover engaging projects that focus on bringing the 
          transformative gift of music to children in various communities.
        </p>
      </div>
      {/* Content sections */}
      <div className="m-10 text-center grid lg:grid-cols-3 md:grid-cols-2 gap-x-10">
        <ImageTextBlock src={PercussionK} text="Percussion Impact" desc="[Name] does [this thing] in [this town]. More descriptive sentences about stuff, each desc 2-3 lines."/>
        <ImageTextBlock src={""} text="Image 1" desc="[Name] does [this thing] in [this town]. More descriptive sentences about stuff, each desc 2-3 lines."/>
        <ImageTextBlock src={""} text="Image 2" desc="Super long description for formatting testing :) !!!!! Super long description for formatting testing :) !!!!! Super long description for formatting testing :) !!!!! Super long description for formatting testing :) !!!!! Super long description for formatting testing :) !!!!!"/>
      </div>

      <div className="grid text-center">
        <img src={""} alt={"Large Image"} className="border-4 border-night w-5/6 h-80 bg-black rounded-3xl justify-self-center object-cover" />
        <h1 className="font-rokkitt font-bold text-2xl mt-3 text-orange text-center">Large Image Text</h1>
        <p className='font-ubuntu mx-10 mb-0'>
          We are really cool and you should definitely join us. Later on we can make a scrolling menu maybe The desc should be about this long. The desc should be about this long. The desc should be about this long. The desc should be about this long. The desc should be about this long. 
        </p>
      </div>

      <div className="m-10 text-center grid lg:grid-cols-3 md:grid-cols-2 gap-x-10">
        <ImageTextBlock src={PercussionK} text="Percussion Impact" />
        <ImageTextBlock src={""} text="Image 1" />
        <ImageTextBlock src={""} text="Image 2" />
        <ImageTextBlock src={""} text="Another Image 1" desc = "blah blah"/>
        <ImageTextBlock src={""} text="Another Image 2" desc = "text text text"/>
      </div>
    </div>
  )
  
};

export default Impact;

import React, { useEffect } from 'react';
import webvid from "../images/webvid.mp4";
import PercussionK from "../images/PercussionImpact.jpg";
import MusicTheoryIMPACT from "../images/MusicTheoryIMPACT.JPG";
import RecordersIMPACT from "../images/RecordersIMPACT.jpg";
import ScrollToTop from "../components/ScrollToTop";
import VoiceIMPACT from "../images/VoiceIMPACT.jpg";
import DanceIMPACT from "../images/hillside.png";
import GamesIMPACT from "../images/GamesIMPACT.JPG";
import ClapIMPACT from "../images/ClapIMPACT.JPG"


const ImageTextBlock = ({ src, text, desc }) => (
  <div className="my-5 text-center"> {/* Add margin for vertical stacking */}
    <div className="grid">
      <img src={src} alt={text} loading="lazy" className="border-4 border-sea w-80 h-80 bg-black rounded-3xl justify-self-center object-cover" />
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

  ScrollToTop();

  return(
    <div className="impact-page">
      <div className="bg-black justify-center h-[80vh] items-center flex-col flex">
        <div className="absolute w-full h-[80vh] overflow-clip">
          <video src={webvid} className="opacity-80 w-full h-full object-cover" autoPlay muted loop />
        </div>
        <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">OUR IMPACT</h1>
        <br />
        <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
          
        </p>
      </div>
      {/* Content sections */}
      <div className="bg-night lg:flex md:flex p-20 lg:px-32">
        <h1 className='font-caprasimo text-2xl leading-relaxed text-sea flex-1 pr-20'>
          Youth Tunes Initiative has established programs across Union County 
          that are free and accessible to all young aspiring musicians. Our workshops 
          include...{/*this layout looks rlly ugly but idk what else to put*/}
        </h1>
        <div className='flex-1'>
          <ul className='text-white font-ubuntu'>
            <li className='bg-orange my-4 p-3 mt-0 rounded-2xl'>Immersive and comprehensive introductions to music theory</li>
            <li className='bg-orange my-4 p-3 rounded-2xl'>Exploration into a wide range of musical fields</li>
            <li className='bg-orange my-4 p-3 rounded-2xl'>Musical experience through fun games, songs, dances, and more</li>
            <li className='bg-orange my-4 p-3 mb-0 rounded-2xl'>A focus on learning past our program by providing easily applicable lessons and a free take-home instrument</li>            </ul>
        </div>
      </div>
      <div className="m-10 text-center grid lg:grid-cols-3 md:grid-cols-2 gap-x-10">
        <ImageTextBlock src={PercussionK} text="Percussion at Kennilworth" desc="Kids learn to identify, read, and play different rhythms on various percussion instruments like drums and tambourines."/>
        <ImageTextBlock src={MusicTheoryIMPACT} text="Music Theory at Elizabeth" desc="After learning how to read notes on the musical staff, they play games to reinforce their memory and understanding."/>
        <ImageTextBlock src={DanceIMPACT} text="Dance at Hillside" desc="Kids get ready to dance to a fun song by the Backstreet Boys by reviewing their choreography and counting by eights. "/>
      </div>

      <div className="grid text-center">
        <img src={RecordersIMPACT} alt={"Recorders at Kennilworth"} className="border-4 border-sea w-5/6 h-80 bg-black rounded-3xl justify-self-center object-cover" />
        <h1 className="font-rokkitt font-bold text-2xl mt-3 text-orange text-center">Recorders at Kennilworth</h1>
        <p className='font-ubuntu mx-10 mb-0'>
          Kids play different songs on their new recorders. Afterwards, they take them home and continue learning.
        </p>
      </div>

      <div className="m-10 text-center grid lg:grid-cols-3 md:grid-cols-2 gap-x-10">
        <ImageTextBlock src={GamesIMPACT} text="Music Games at Elizabeth" desc="To reinforce their new knowledge of musical notation and measure structure, kids play games in teams."/>
        <ImageTextBlock src={ClapIMPACT} text="Rhythm at Hillside" desc="Kids clap out different rhythms to learn how patterns are combined to create music. "/>
        {/*
        <ImageTextBlock src={VoiceIMPACT} text="Voice at Kennilworth" desc="As a group, kids both learn how to sing the solfege scale (do-re-mi) and sign it out." />
        <ImageTextBlock src={""} text="Another Image 1" desc = "blah blah"/>
        <ImageTextBlock src={""} text="Another Image 2" desc = "text text text"/>
      */}
      </div>
    </div>
  )
};

export default Impact;

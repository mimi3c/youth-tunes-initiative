import React, {useRef} from "react";
import Events from "../components/Events";
import homeBg from "../images/home_bg.jpeg";
import anushaMusic from "../images/HEADER.jpg";
import teaching from  "../images/IMG_2985.JPG";
import solfege from "../images/IMG_2620.jpg";
import danceImpact from "../images/DanceIMPACT.jpg";
import mtImpact from "../images/MusicTheoryIMPACT.JPG";
import hillside from "../images/hillside2.png"
import { IoIosArrowDown } from "react-icons/io";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import reva from "../images/reva.jpeg"
import anusha from "../images/anusha.jpeg"




const Home = () => {
    const div = useRef()

    ScrollToTop();

    return(
        <div className="overflow-clip">
            <div className="bg-black justify-center h-[100vh] items-center flex-col flex">
                <div className="absolute w-full h-full overflow-clip">
                    <img src={homeBg} alt="" className="opacity-80 w-full h-full object-cover"/>
                </div>
                <h1 className="text-sea font-shrikhand text-5xl text-center w-11/12 z-30">
                    YOUTH TUNES INITIATIVE
                </h1>
                <p className="text-white w-5/12 text-center font-ubuntu font-normal mx-auto z-30">
                    <br />
                    Youth Tunes Initiative aims to provide accessible education for children to  
                    explore the many different elements of music. Our free, four-day workshops are found at 
                    local libraries all across Union County.
                    <br /><br />
                    We are always looking for volunteers to help us out! New Jersey high schoolers with 
                    a passion for music are welcome to email us for more information.
                </p>
                <button className="z-30 text-white mt-5"
                    onClick={() =>
                        div.current.scrollIntoView({ behavior: "smooth", block: "start" })}
                    ><IoIosArrowDown />
                </button>
            </div>
            <div className="py-20 bg-sea border-t-2 border-night scroll-m-10" ref={div}>
                <Events />
            </div>
            <div className="bg-night py-32">
                <div className="lg:mx-64 grid justify-center">
                    <h1 className="text-sea text-center font-shrikhand uppercase justify-self-center text-5xl w-11/12">Our founders</h1>
                    <div className="lg:flex md:flex grid gap-x-10 justify-center">
                        <div className="grid flex-1">
                            <img src={anusha} alt="" className="object-cover justify-self-center bg-black w-80 h-80 m-10 rounded-3xl"/>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-orange font-rokkitt">Anusha</h1>
                                <p className="font-ubuntu text-white m-10">
                                    Anusha is a part of her high school select choir, NJ Regionals Choir, and NJ All-State Choir.
                                    She has been performing at events for 9 years, been part of various select choirs for 6 years, and has helped teach at the Wharton Performing Arts
                                    School musical theatre summer programs. <br /><br /><br />
                                </p>
                            </div>
                        </div>
                        <div className="grid flex-1">
                            <img src={reva} alt="" className="object-cover justify-self-center bg-black w-80 h-80 m-10 rounded-3xl"/>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-orange font-rokkitt">Reva</h1>
                                <p className="font-ubuntu text-white m-10">
                                    Trained in Indian Classical dance for over 10 years, Reva has taught dance at a
                                    regular dance school as well as conducted her own dance summer camp. Reva has been
                                    playing violin for the past 7 years, and is currently a member of the NJYS Youth Orchestra. <br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 grid jusitfy-center">
                <h1 className="text-5xl font-caprasimo uppercase text-center text-sea">
                    Image Gallery
                </h1>
                <h2 className="lg:mx-64 text-center px-5 font-rokkitt font-semibold text-2xl mt-5 text-orange">
                    Our volunteers work hard to provide kids with fun and engaging experiences.
                    Learn more about how we introduce them to the world of music:
                </h2>
                <div className="mt-5 lg:grid-cols-3 lg:mx-10 md:grid-cols-2 grid gap-x-10">
                    <img src={teaching} alt="" className="border-4 border-sea m-5 w-80 h-80 justify-self-center rounded-3xl object-cover" loading="lazy"/>
                    <img src={danceImpact} alt="" className="border-4 border-sea m-5 w-80 h-80 justify-self-center rounded-3xl object-cover" loading="lazy"/>
                    <img src={mtImpact} alt="" className="border-4 border-sea m-5 w-80 h-80 justify-self-center rounded-3xl object-cover" loading="lazy"/>
                    <img src={hillside} alt="" className="border-4 border-sea m-5 w-80 h-80 justify-self-center rounded-3xl object-cover" loading="lazy"/>
                    <img src={solfege} alt="" className="border-4 border-sea m-5 w-80 h-80 justify-self-center rounded-3xl object-cover" loading="lazy"/>
                    <img src={anushaMusic} alt="" className="border-4 border-sea m-5 w-80 h-80 justify-self-center rounded-3xl object-cover" loading="lazy"/>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/impact"><button className="bg-night text-white font-ubuntu rounded-3xl mt-5 p-5 px-10 justify-self-center w-max-content"onClick={() => {}}>See More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
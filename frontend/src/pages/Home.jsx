import React, {useRef} from "react";
import Events from "../components/Events";
import homeBg from "../images/home_bg.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";


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
                <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto z-30">
                    <br />
                    This is from AI. Join our community of passionate individuals who
                    believe in the power of music to shape bright futures. Explore our 
                    platform to discover engaging projects that focus on bringing the 
                    transformative gift of music to children in various communities.
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
                    <div className="lg:flex md:flex grid justify-center">
                        <div className="grid flex-1">
                            <img src="" alt="test" className="justify-self-center bg-black w-80 h-80 m-10 rounded-3xl"/>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-orange font-rokkitt">Anusha</h1>
                                <p className="font-ubuntu text-white m-10">
                                    Anusha is a part of her high school choir, NJ Regionals Choir, and NJ All-State Choir.
                                    She has been performing at events for 8 years and has helped teach at the Wharton Arts Music
                                    School musical summer programs. 
                                </p>
                            </div>
                        </div>
                        <div className="grid flex-1">
                            <img src="" alt="test" className="justify-self-center bg-black w-80 h-80 m-10 rounded-3xl"/>
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
                <h1 className="text-5xl font-caprasimo uppercase text-center text-sea">Image Gallery</h1>
                <h2 className="text-center px-5 font-rokkitt font-semibold text-2xl mt-5 text-orange">Something something qqqwert fhjhjgfk. learn more about how we teach kids. heres some images</h2>
                <div className="mt-5 lg:grid-cols-3 lg:mx-10 md:grid-cols-2 grid">
                    <img src="" alt="" className="bg-black m-5 w-80 h-80 justify-self-center rounded-3xl"/>
                    <img src="" alt="" className="bg-black m-5 w-80 h-80 justify-self-center rounded-3xl"/>
                    <img src="" alt="" className="bg-black m-5 w-80 h-80 justify-self-center rounded-3xl"/>
                    <img src="" alt="" className="bg-black m-5 w-80 h-80 justify-self-center rounded-3xl"/>
                    <img src="" alt="" className="bg-black m-5 w-80 h-80 justify-self-center rounded-3xl"/>
                    <img src="" alt="" className="bg-black m-5 w-80 h-80 justify-self-center rounded-3xl"/>
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
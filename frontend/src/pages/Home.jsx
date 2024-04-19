import React from "react";
import Events from "../components/Events";

const Home = () => {
    return(
        <div>
            <div className="bg-black justify-center h-[100vh] items-center flex-col flex">
                <h1 className="text-sea font-shrikhand text-5xl text-center">
                    YOUTH TUNES INITIATIVE
                </h1>
                <p className="text-white w-3/6 text-center font-ubuntu font-normal mx-auto">
                    <br />
                    This is from AI. Join our community of passionate individuals who
                    believe in the power of music to shape bright futures. Explore our 
                    platform to discover engaging projects that focus on bringing the 
                    transformative gift of music to children in various communities.
                </p>
            </div>
            <div className="py-20 bg-sea">
                <Events />
            </div>
            <div className="bg-night py-32">
                <div className="lg:mx-64 grid justify-center">
                    <h1 className="text-sea text-center font-shrikhand uppercase text-5xl">Our founders</h1>
                    <div className="lg:flex md:flex px-10 mt-5 items-center w-auto">
                        <img src="" alt="test" className="bg-black min-w-80 h-80 mr-10 rounded-3xl"/>
                        <div className="">
                            <h1 className="text-4xl font-bold text-orange font-rokkitt">Name</h1>
                            <p className="font-ubuntu text-white">
                                As a high school junior, [Name] teaches music to children aged 5 to 10, blending traditional methods with innovative
                                techniques to create engaging lessons. Leveraging [his/her] experience as a pianist and guitarist, [he/she] tailors lessons
                                to each student, fostering their skills and confidence in a fun environment. <br /><br />
                                Outside of teaching, [Name] actively participates in school music programs and volunteer initiatives, dedicated to inspiring
                                the next generation of musicians and fostering a lifelong love for music.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex md:flex px-10 mt-5 items-center w-auto">
                        <div className="text-right">
                            <h1 className="text-4xl font-bold text-orange font-rokkitt">Name</h1>
                            <p className="font-ubuntu text-white">
                                As a high school junior, [Name] teaches music to children aged 5 to 10, blending traditional methods with innovative
                                techniques to create engaging lessons. Leveraging [his/her] experience as a pianist and guitarist, [he/she] tailors lessons
                                to each student, fostering their skills and confidence in a fun environment. <br /><br />
                                Outside of teaching, [Name] actively participates in school music programs and volunteer initiatives, dedicated to inspiring
                                the next generation of musicians and fostering a lifelong love for music.
                            </p>
                        </div>
                        <img src="" alt="test" className="bg-black min-w-80 h-80 ml-10 rounded-3xl"/>
                    </div>
                </div>
            </div>
            <div className="py-20 grid jusitfy-center">
                <h1 className="text-5xl font-caprasimo uppercase text-center text-sea">Image Gallery</h1>
                <h2 className="text-center px-5 font-rokkitt font-semibold text-2xl mt-5 text-orange">Something something qqqwert fhjhjgfk. learn more about how we teach kids. heres some images</h2>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
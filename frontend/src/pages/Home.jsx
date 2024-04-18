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
                    This is from AI. Join our community of passionate individuals who
                    believe in the power of music to shape bright futures. Explore our 
                    platform to discover engaging projects that focus on bringing the 
                    transformative gift of music to children in various communities.
                </p>
            </div>
            <div>
                <Events />
            </div>
        </div>
    )
}

export default Home;
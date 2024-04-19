import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import SingleEvent from "./SingeEvent";
import eventslist from "./eventslist";

const Events = () => {
    const townsLength = eventslist.length;
    const[townstate, setTownstate] = useState(0);
    
    return(
        <div className="px-10">
            <div className="lg:mx-48 grid justify-center rounded-3xl border-2 border-night bg-white">
                <div className="flex items-center mx-5 w-auto">
                    <FaAngleLeft className="h-10 min-w-5 text-sea" onClick={() =>{
                        townstate <= 0
                            ? setTownstate(townsLength-1)
                            : setTownstate(townstate-1);
                    }}/>
                    <div className="p-5 h-[350px]">
                        <SingleEvent currentTown={townstate} />
                    </div>
                    <FaAngleRight className="h-10 w-5 min-w-5 text-sea" onClick={() =>{
                        townstate >= townsLength-1
                            ? setTownstate(0)
                            : setTownstate(townstate+1);
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default Events;
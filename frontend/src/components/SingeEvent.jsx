import React from "react";
import eventslist from "./eventslist";

const SingleEvent = (props) => {
    return(
        <div className="my-5">
            <h1 className="text-4xl font-caprasimo text-orange mb-5">Upcoming Events: <a href="">{eventslist[props.currentTown].town}</a></h1>
            <p>
                <div className="overflow-y-auto h-[230px]">
                    <table className="">
                        {eventslist[props.currentTown].events.map(
                            (shownevent, index) => {
                                return(
                                    <tr className="font-ubuntu text-start border-y-4 border-white" key={index}>
                                        <td className="bg-peach text-center w-[90px] font-bold text-orange p-2">{shownevent.month}/{shownevent.day}/{shownevent.year}</td>
                                        <td className="p-2 w-32 text-orange text-center border-4 border-white bg-peach">{shownevent.time}</td>
                                        <td className="p-2">{shownevent.desc}</td>
                                    </tr>
                                );
                            }
                        )}
                    </table>
                </div>
            </p>
        </div>
    )
}

export default SingleEvent;
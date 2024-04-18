import React from "react";
import eventslist from "./eventslist";

const SingleEvent = (props) => {
    return(
        <div className="my-5">
            <h1 className="text-4xl font-caprasimo text-orange mb-5">Upcoming Events: <a href="">{eventslist[props.currentTown].town}</a></h1>
            <p>
                <table className="">
                    {eventslist[props.currentTown].events.map(
                        (shownevent, index) => {
                            return(
                                <tr className="font-ubuntu text-start" key={index}>
                                    <td className="font-bold text-orange p-2">{shownevent.month}/{shownevent.day}/{shownevent.year}</td>
                                    <td className="p-2 w-40 text-orange">{shownevent.time}</td>
                                    <td className="p-2">{shownevent.desc}</td>
                                </tr>
                            );
                        }
                    )}
                </table>
            </p>
        </div>
    )
}

export default SingleEvent;
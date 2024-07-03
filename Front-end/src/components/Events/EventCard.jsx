import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className=" border-2 border-gray-600 rounded-t-xl">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={event.imageSrc}
          alt={event.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="">
        <div className="text-lg font-[600] text-center py-3">{event.name}</div>
        <h1>{event.heading}</h1>
        <div className="text-center p-3">{event.description}</div>
      </div>
    </div>
  );
};

export default EventCard;

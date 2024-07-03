import React from "react";

const CareerServicesCard = ({ career }) => {
  return (
    <div className=" border-2 p-2">
      <div className="">
        <div className="text-lg font-[600] text-center py-3">
          <a
            href={career.slug}
            className="hover:text-blue-600 hover:cursor-pointer"
          >
            {career.name}
          </a>
        </div>
        <div className="text-center">{career.description}</div>
      </div>
    </div>
  );
};

export default CareerServicesCard;

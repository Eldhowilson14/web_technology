import React from "react";

const AchievementCard = ({ achievement }) => {
  return (
    <div className="flex sm:flex-row flex-col border-2 border-gray-600 rounded-xl">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={achievement.imageSrc}
          alt={achievement.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="text-center my-auto items-center self-center justify-center content-center place-content-center">
        {/* <div className="text-lg font-[600] text-center py-3">
          {achievement.name}
        </div> */}
        <div className="text-center text-xl my-auto items-center self-center justify-center content-center place-content-center">
          {achievement.description}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;

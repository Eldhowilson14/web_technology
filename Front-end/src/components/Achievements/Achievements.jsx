import React from "react";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: "Alumini Friends",
      description:
        "Agriculture Student From Lovely Professional University Bags A Rs. 1 Crore Package",

      imageSrc:
        "https://static.businessworld.in/article/article_extra_large_image/1554471259_ot8zDz_Kavita_Monsanto.JPG",
      imageAlt: "Alumini",
    },
    {
      id: 2,
      name: "Alumini Friends",
      description:
        "LPU B.Tech. CSE student Mayank Bist has been placed at a grand package of Rs. 50.53 Lakhs.",

      imageSrc:
        "https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/312247686_10159818307666590_1431421173809165980_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U6Li5RTz66AAX8S1Szu&_nc_ht=scontent.fluh1-2.fna&oh=00_AfCre9luu6QPVH7ZZSl8irp7R_udCHCnRqWGDnElUi0IXQ&oe=6603C5E5",
      imageAlt: "Alumini",
    },

    {
      id: 3,
      name: "Alumini Friends",
      description:
        "LPU B.Tech. CSE student Tanya Arora has been placed at a grand package of Rs. 42 Lakhs.",

      imageSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-3010f7c667aee922e00e1f10a141859e-lq",
      imageAlt: "Alumini",
    },
    {
      id: 4,
      name: "Alumini Friends",
      description:
        "LPU student Neeraj Chopra made historic win at World Athletics Championships-2022 in U.S.",

      imageSrc:
        "https://www.lpu.in/PressReleaseNew/News/2c1fa3a2-0cf0-4bf2-889e-d69e4f227e48_01.png",
      imageAlt: "Alumini",
    },
    {
      id: 5,
      name: "Alumini Friends",
      description:
        "AUtkarsh, a wireless system engineer working with Google, California, and Neha, a software engineer with Yahoo also express their gratitude towards LPU in shaping the careers of their dreams.",

      imageSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-38ac27c299e41d518f606bd6415535ff-lq",
      imageAlt: "Alumini",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className=" text-3xl sm:text-7xl text-black font-[900] text-center pb-10 ">
            Achievements
          </h1>{" "}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {achievements.map((achievement) => (
            <AchievementCard achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

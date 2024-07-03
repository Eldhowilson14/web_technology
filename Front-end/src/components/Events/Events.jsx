import React from "react";
import EventCard from "./EventCard";
import eventImg1 from "@/assets/image/event/1.jpg";
import eventImg2 from "@/assets/image/event/2.jpg";
import eventImg3 from "@/assets/image/event/3.jpg";
import eventImg4 from "@/assets/image/event/4.jpg";
import eventImg5 from "@/assets/image/event/5.jpg";
import eventImg6 from "@/assets/image/event/6.jpg";
import eventImg7 from "@/assets/image/event/7.jpg";
import eventImg8 from "@/assets/image/event/8.jpg";
import eventImg9 from "@/assets/image/event/9.jpg";
import eventImg10 from "@/assets/image/event/10.jpg";
import eventImg11 from "@/assets/image/event/11.jpg";
import eventImg12 from "@/assets/image/event/12.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Stand Up Poet Manhar Seth's Stirring Performance at Campus",
      description:
        "Our campus resonated with poetic charm of Stand Up poet Manhar Seth during his charming performance. Through his eloquent words and heartfelt delivery, Seth skillfully transported us into a world of introspection and emotion, allowing us to bask in the beauty of his renowned poetry.",

      imageSrc: eventImg1,
      imageAlt: "Alumini",
    },
    {
      id: 2,
      name: "Dog Show Extravaganza",
      description:
        "LPU and Kohinoor Kennel Club, Jalandhar, joined forces to host an exhilarating dog show showcasing a variety of breeds and talents. The event brought together dog enthusiasts in a jubilant celebration of their shared passion for canines. Each participating dog received awards, contributing to the overall excitement of the show.",

      imageSrc: eventImg2,
      imageAlt: "Events/News",
    },
    {
      id: 3,
      name: "LPU celebrated the grandeur of the National and State Languages",
      description:
        "The School of Liberal and Creative Arts (Social Sciences and Languages) celebrated Hindi Diwas and a Punjabi Seminar on two consecutive days. Various fun filled activities like to act and deliver dialogues as per a famous Bollywood actor/actress of one’s choice, slogan writing, debates and more were organised for the students.",

      imageSrc: eventImg3,
      imageAlt: "Achievements",
    },

    {
      id: 4,
      name: "Opening ceremony of YouthVibe 2023 was a great hit",
      description:
        "LPU's Global Open Fest, was a resounding success! With the esteemed presence of Chief Guest Lakshmi Narayan Tripathi, the event commenced with great enthusiasm. The stage was set for an incredible celebration of talent, creativity, and cultural diversity.",

      imageSrc: eventImg4,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 5,
      name: "Independence Day is celebrated at LPU with great fervour and joy",
      description:
        "The 76th Independence Day celebration at the campus was a blooming affair. The event kickstarted at Unipolis, awash in vibrant tricolour hues, with LPU students’ theatrical performances transporting us back to the pre-independence era.",
      imageSrc: eventImg5,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 6,
      name: "LPU witnessed a thrilling stunt show ",
      description:
        "The car and bike show YouthVibe 2023 was a thrilling spectacle of daring maneuvers, high speeds, and breathtaking tricks. Talented riders and racers took to the road with passion and enthusiasm, leaving us all in awe of their skill and precision.",

      imageSrc: eventImg6,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 7,
      name: "Stand up comedy with Bassi",
      description:
        "The campus witnessed a night full of laughter as the famous stand up comedian, Anubhav Singh Bassi graced the audience for the show 'Kisi Ko Mat Batana'. It was truly a stress buster for everyone",

      imageSrc: eventImg7,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 8,
      name: "A night of melody and music with Rashmeet Kaur",
      description:
        "Rashmeet Kaur graced the campus during the Coke Studio Bharat LIVE Concert and made everyone groove to her music. Her performance was enthralling and energetic for the crowd.",

      imageSrc: eventImg8,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 9,
      name: "Unforgettable Night of Laughter with Zakir Khan",
      description:
        "It was a memorable evening when the famous stand-up comedian and actor, Zakir Khan, made a captivating appearance. Through his clever humour and natural ability to connect with the audience through heartfelt stories, Zakir Khan transformed an ordinary evening into an unforgettable, once-in-a-lifetime event.",

      imageSrc: eventImg9,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 10,
      name: "Do What Floats Your Boat - Aman Gupta, CEO boAt",
      description:
        "LPU hosted an exclusive talk show Boat-ing to success with Aman Gupta. He shared his entrepreneurial journey with the students and encouraged them to keep on trying till they find success. Students were eager to interact with him and bombarded him with several questions for guidance and wisdom. ",

      imageSrc: eventImg10,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 11,
      name: "Youth Talk Show with Youtube Sensation Ranveer Allahbadia",
      description:
        "Ranveer Allahbadia, commonly known as BeerBiceps, graced the vertos for a youth talk show at the campus. He shared his own life experiences with the students and encouraged them to work towards their goals. At the same time, he shared the importance of fitness with the students and motivated them to place both physical fitness and mental health on a high priority. ",

      imageSrc: eventImg11,
      imageAlt: "Job Board/Career Services",
    },

    {
      id: 12,
      name: "Bollywood’s Scintillating Singer Guru Randhawa Visited LPU",
      description:
        "The renowned Bollywood’s singing star, Guru Randhawa, performed LIVE at LPU campus in a concert organised by Realme India. He enthralled thousands of LPU students through his hypnotic melodies.",
      imageSrc: eventImg12,
      imageAlt: "Job Board/Career Services",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className=" text-3xl sm:text-7xl text-black font-[900] text-center pb-10 ">
            EVENTS AT LPU
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {events.map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

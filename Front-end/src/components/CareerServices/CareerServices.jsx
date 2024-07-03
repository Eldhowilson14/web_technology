import React from "react";
import CareerServicesCard from "./CareerServicesCard";

const CareerServices = () => {
  const careers = [
    {
      id: 1,
      name: "Summer Analyst Internship",
      description:
        "Seek challenging internships in finance, consulting, or related fields. Gain hands-on experience and build your professional network.",
      slug: "https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program.html",
    },
    {
      id: 2,
      name: "Full Stack Developer Job",
      description:
        "Design and develop both the front-end and back-end of web applications. Utilize your expertise in coding, databases, and user interfaces.",
      slug: "https://in.best-jobs-online.com/serp/2/?position=Full%20Stack%20Developer&locphysical=9144064&qrn_source=google&qrn_medium=cpc&qrn_campaign=1063886811&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPLZKh-c9-jyOkP5k-TaUhOlA3jEWFdlnODWAVShQmINBzTO6GcZSoaAl3OEALw_wcB",
    },
    {
      id: 3,
      name: "Cyber Security Professional Job",
      description:
        "Protect networks, systems, and data from cyber attacks. Implement security measures, monitor for threats, and respond to incidents.",
      slug: "https://www.naukri.com/cyber-security-jobs",
    },
    {
      id: 4,
      name: "Data Science Jobs",
      description:
        "Extract insights from data to solve business problems. Employ statistical analysis, machine learning, and visualization techniques.",
      slug: "https://builtin.com/jobs/data-analytics/data-science",
    },
    {
      id: 5,
      name: "Software Development Jobs",
      description:
        "Design, code, test, and maintain software applications. Collaborate in teams using agile methodologies and version control.",
      slug: "https://www.amazon.jobs/en-gb/job_categories/software-development",
    },
    {
      id: 6,
      name: "Machine Learning Jobs",
      description:
        "Build and deploy algorithms that learn from data.  Apply techniques for prediction, classification, and pattern recognition.",
      slug: "https://www.naukri.com/machine-learning-jobs",
    },
    {
      id: 7,
      name: "IOT Engineer Jobs",
      description:
        "Design and implement connected devices and systems. Work with sensors, hardware, embedded software, and network protocols.",
      slug: "https://www.naukri.com/iot-jobs",
    },
    {
      id: 8,
      name: "Resume Writing Tips",
      description:
        "Tailor your resume to each job application. Highlight relevant skills, quantify achievements, and use strong action verbs.",
      slug: "hhttps://in.indeed.com/career-advice/resumes-cover-letters/10-resume-writing-tips",
    },
    {
      id: 9,
      name: "Interview Preparation Guide",
      description:
        "Research the company, practice answering common questions, and prepare thoughtful questions to ask the interviewer.",
      slug: "https://careers.umbc.edu/students/network/networking101/tips/",
    },
    {
      id: 10,
      name: "Networking Tips",
      description:
        "Build genuine relationships with professionals in your field. Attend industry events, leverage online platforms, and offer help to others.",
      slug: "https://careers.umbc.edu/students/network/networking101/tips/",
    },
    {
      id: 11,
      name: "Freelance platforms",
      description:
        "Find independent work on platforms specializing in your skillset. Build a portfolio, set competitive rates, and manage client projects.",
      slug: "https://careers.umbc.edu/students/network/networking101/tips/",
    },
    {
      id: 10,
      name: "Networking Events and Workshops",
      description:
        "Attend industry-specific events to meet potential contacts. Take workshops to develop in-demand skills.",
      slug: "https://www.indeed.com/career-advice/career-development/types-of-networking-events",
    },
    {
      id: 11,
      name: "communication skill tips",
      description:
        "Practice active listening, clear articulation, and tailoring your communication style to different audiences.",
      slug: "https://in.indeed.com/career-advice/interviewing/communications-skills-interview-questions",
    },
    {
      id: 12,
      name: "leadership skill tips",
      description:
        "Take initiative, be decisive, mentor others, and inspire teams towards a shared vision.",
      slug: "https://www.futurelearn.com/info/blog/how-to-improve-leadership-skills",
    },
    {
      id: 13,
      name: "Group discussion tips",
      description:
        "Contribute valuable insights, respect others' opinions, and facilitate participation from all group members.",
      slug: "https://prepinsta.com/interview-preparation/group-discussion/",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="">
            <h1 className=" text-5xl text-blue-900 font-bold">
              Jobs Boards/Career Services
            </h1>
            <section className=" text-lg py-4">
              <h2>Let's Look Your Future for jobs...</h2>
              <p>
                Welcome to our Jobs Career Services section. Here you can find
                job listings, career resources, and more.
              </p>
            </section>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {careers.map((career) => (
              <CareerServicesCard key={career.id} career={career} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerServices;

import React from "react";
import BlogsCard from "./BlogsCard";
import blogimg1 from "@/assets/image/blog/1.jpg";
import blogimg2 from "@/assets/image/blog/2.jpg";
import blogimg3 from "@/assets/image/blog/3.jpg";
import blogimg4 from "@/assets/image/blog/4.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      name: "Auto-GPT, BabyAGI, And AgentGPT: How To Use AI Agents",
      description:
        "Auto-GPT, BabyAGI, And AgentGPT: How To Use AI Agents.",
      slug: "https://in.mashable.com/tech/51188/auto-gpt-babyagi-and-agentgpt-how-to-use-ai-agents",
      imageSrc: 'https://sm.mashable.com/t/mashable_in/article/a/auto-gpt-b/auto-gpt-babyagi-and-agentgpt-how-to-use-ai-agents_x22w.1248.jpg',
      imageAlt: "Information System",
      buttonText: "Information System",
    },
    {
      id: 2,
      name: "Ransomware: Why It’s Time to Think of it as a Data Management Problem",
      description:
        "Without a clear definition of alumni engagement, institutions struggle. This definition will help alumni & advancement professionals work smarter together.",
      slug: "https://gigaom.com/2022/04/19/ransomware-why-its-time-to-think-of-it-as-a-data-management-problem/",
      imageSrc: 'https://b2494509.smushcdn.com/2494509/wp-content/uploads/sites/1/2022/04/27d14468-ransomware.png?lossy=2&strip=1&webp=1',
      imageAlt: "Information System",
      buttonText: "Information System",
    },
    {
      id: 3,
      name: "Do RFID blocking cards actually work?",
      description:
        "Do RFID blocking cards actually work?",
      slug: "https://www.zdnet.com/article/do-rfid-blocking-cards-actually-work-my-flipper-zero-revealed-the-truth/",
      imageSrc: 'https://www.zdnet.com/a/img/resize/07142f745e5c1475343294c97a564ceb7dfa0618/2023/02/20/6003ef6c-69b4-49a3-9ae8-0fbf4aca1f16/img-2128.jpg?auto=webp&width=1280',
      imageAlt: "Information System",
      buttonText: "Information System",
    },

    {
      id: 4,
      name: "What is information systems? Definition, uses, and examples",
      description:
        "What is information systems? Definition, uses, and examples",
      slug: "https://zapier.com/blog/what-is-information-systems/",
      imageSrc:
        "https://images.ctfassets.net/lzny33ho1g45/2hfCIm4XnQn9dUsBoz5eB6/4d054f2819a9358d7ea06d0c32aeb5ba/Group_12376.jpg?w=1520&fm=avif&q=30&fit=thumb&h=760",
        imageAlt: "Information System",
        buttonText: "Information System",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className=" text-3xl sm:text-7xl text-black font-[900] text-center pb-10 ">
            Blogs
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {blogs.map((blog) => (
            <BlogsCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

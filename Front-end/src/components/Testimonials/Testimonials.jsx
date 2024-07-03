import { InfiniteMovingCards } from "@/components/ui/custom/infinite-moving-cards";
import React from "react";
import Brands from "./Brands";
import bgImage from "@/assets/image/main_photo1.jpg";

const testimonials = [
  {
    quote:
      "I wasn't sure how useful an alumni network would be, but I've been pleasantly surprised. I've made valuable connections in my field that I wouldn't have found otherwise.",
    name: "Pritesh Kumar",
    title: "Focused on networking",
    profilePhoto:
      "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "It's more than just finding jobs. The alumni community on this website is incredibly supportive. I love seeing everyone's updates and feeling connected to my college roots.",
    name: "Lucky Kumar",
    title: "Emphasizing the community aspect",
    profilePhoto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "Love the ease of finding and connecting with alumni. It would be even better if there was a dedicated forum for discussions or Q&A.",
    name: "Ankur Kumar",
    title: "Praise with a suggestion",
    profilePhoto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "Honestly, I was hesitant to join another social platform, but this has been worth it. Thanks for creating a space for our alumni to connect!",
    name: "Praveen Kumar",
    title: "Grateful tone",
    profilePhoto:
      "https://plus.unsplash.com/premium_photo-1687832783320-35671afbf484?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote:
      "I'm amazed - I found a friend I hadn't seen in 15 years through this website! It's sparked some wonderful memories and new opportunities.",
    name: "Lucky Kumar",
    title: "Long-lost connections",
    profilePhoto:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
  },
];

const Testimonials = () => {
  return (
    <div
      className="flex flex-col antialiased bg-grid-white/[0.05] items-center bg-center justify-center relative overflow-hidden py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1 className="text-6xl text-[#003566] font-[700]">Recent Visitor's</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonials;

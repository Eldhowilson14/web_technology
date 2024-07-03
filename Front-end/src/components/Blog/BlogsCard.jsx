import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const BlogsCard = ({blog}) => {
   return (
     <Link to={blog.slug} className="group">
       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
         <img
           src={blog.imageSrc}
           alt={blog.imageAlt}
           className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300 ease-in-out hover:scale-110"
         />
       </div>
       <div className="">
         <div className="text-lg font-[600] text-center py-3">{blog.name}</div>
         <div className="text-center">{blog.description}</div>
       </div>
       <div className=" flex self-center justify-center content-center items-center mx-auto mt-3">
         <Button className="hover:bg-inherit bg-[#003566] hover:text-[#003566] text-white border-2 border-[#003566] w-full">
           read more
         </Button>
       </div>
     </Link>
   );
}

export default BlogsCard
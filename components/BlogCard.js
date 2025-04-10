//BlogCard.js
//blog-project/components/BlogCard.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  if (!blog) {
    return <div className="text-center text-gray-500 p-4">Loading blog post...</div>;
  }
  
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="relative h-64">
        {blog.image && (
          <Image
            src={blog.image.startsWith('/') ? blog.image : `/images/${blog.image}`}
            alt={blog.title || "Blog Image"}
            fill
            className="absolute inset-0 w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
          <p className="text-xs sm:text-sm font-bold mb-1 sm:mb-2">
            {blog.location || "Unknown Location"}
          </p>
          <p className="text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">
            {blog.excerpt || "No excerpt available."}
          </p>
        </div>
      </div>
      
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between text-2xs sm:text-xs text-gray-500 mb-2">
          <span>{blog.author || "Unknown Author"}</span>
          <span>{blog.date || "Unknown Date"}</span>
          <span>{blog.readTime || "Unknown Read Time"}</span>
        </div>
        <p className="text-sm sm:text-lg font-bold text-gray-800 mb-3 line-clamp-2">
          {blog.title || "Untitled Post"}
        </p>
        <Link href={`/blog/${blog.id}`}>
          <span className="inline-block text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium cursor-pointer">
            Read Full Post
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
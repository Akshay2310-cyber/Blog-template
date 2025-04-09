//index.tsx                                                                           
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

const BlogListPage = () => {
  return (
    <>
      <Head>
        <title>Our Blog | Your Website Name</title>
        <meta 
          name="description" 
          content="Explore our latest blog posts about travel, culture, and adventure" 
        />
      </Head>
      
      <div className="max-w-full bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
        <div className="text-center">
          <div className="relative rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/blogcard.jpeg"
              alt="Travel Hero"
              width={1920}
              height={600}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Our Travel Stories
              </h2>
              <p className="text-xs sm:text-base mb-3 sm:mb-4 max-w-xl text-center">
                Discover amazing destinations, cultural insights, and travel tips 
                from our experienced adventurers.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 text-xs sm:text-sm rounded-md">
                Start Your Adventure
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
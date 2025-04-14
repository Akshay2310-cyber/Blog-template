import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import payload from "payload";
import BlogCard from "../../components/BlogCard";

const BlogPostPage = ({ blog, relatedBlogs }) => {
  if (!blog) {
    return <div className="text-center py-20">Blog post not found</div>;
  }

  return (
    <div className="w-full bg-white">
      <Head>
        <title>{blog.title} | Your Website Name</title>
        <meta name="description" content={blog.excerpt} />
      </Head>

      {/* Hero Section */}
      <div className="w-full mb-8">      
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg h-48 sm:h-64 md:h-96 lg:h-[500px]">
            <Image
              src={blog.image}
              alt={blog.title}  
              fill 
              className="absolute inset-0 w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <div className="text-center max-w-3xl">  
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{blog.location}</h1>
                <p className="text-xs sm:text-base mb-3 sm:mb-6 max-w-xl mx-auto">
                  {blog.excerpt}
                </p>
                
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-md inline-flex items-center mt-2 text-xs sm:text-base font-medium">
                  Explore now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"  
                    className="h-3 w-3 sm:h-5 sm:w-5 ml-1 sm:ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    /> 
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 pb-8"> 
        <div className="prose max-w-none">
          {blog.content && blog.content.map((section, index) => ( 
            <div key={index} className="mb-8 sm:mb-12">
              <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-900">
                {section.title}
              </h2>
              <div className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-800" 
                   dangerouslySetInnerHTML={{ __html: section.text }} />
              
              {section.image && (
                <div className="rounded-lg overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src={section.image.url}   
                    alt={section.image.alt || section.title}
                    width={800}
                    height={400}
                    className="w-full h-48 sm:h-64 md:h-96 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-10 border-t pt-4 sm:pt-6">
          <Link href="/" className="mb-4 sm:mb-0">
            <span className="inline-flex items-center text-gray-700 hover:text-red-500 cursor-pointer text-sm sm:text-base">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              > 
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to all posts
            </span>
          </Link>
          
          <div className="flex space-x-4">
            <button className="inline-flex items-center text-gray-700 hover:text-red-500 text-sm sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor" 
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button> 
            <button className="inline-flex items-center text-gray-700 hover:text-red-500 text-sm sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"  
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Related posts section */}
      {relatedBlogs.length > 0 && (
        <div className="bg-gray-50 py-8 sm:py-16 mt-8 sm:mt-16 w-full">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-left text-gray-900">
              You might also like:
            </h3>
            <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Server-side data fetching
export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    
    // Fetch the blog post
    const blogData = await payload.find({
      collection: 'blogs',
      where: {
        id: {
          equals: slug,
        },
      },
      depth: 2,
    });

    if (!blogData.docs.length) {
      return {
        notFound: true,
      };
    }

    const blogPost = blogData.docs[0];
    
    // Fetch related blogs
    const relatedBlogsData = await payload.find({
      collection: 'blogs',
      where: {
        and: [
          {
            id: {
              not_equals: slug,
            }
          },
          {
            status: {
              equals: 'published',
            }
          }
        ]
      },
      limit: 3,
      depth: 1,
    });

    // Format the blog post data
    const blog = {
      id: blogPost.id,
      title: blogPost.title,
      author: typeof blogPost.author === 'object' ? blogPost.author.name : 'Unknown Author',
      date: blogPost.publishedDate ? new Date(blogPost.publishedDate).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }) : 'Unknown Date',
      image: typeof blogPost.image === 'object' ? blogPost.image.url : '/images/blogcard.jpeg',
      readTime: blogPost.readTime || '5 min read',
      excerpt: blogPost.excerpt,
      location: blogPost.location || 'Unknown Location',
      content: blogPost.content.map(section => ({
        title: section.title,
        text: section.text.html || section.text, // Handle rich text format
        image: section.image ? {
          url: section.image.url,
          alt: section.image.alt || section.title
        } : null
      }))
    };

    // Format related blogs
    const relatedBlogs = relatedBlogsData.docs.map(relatedBlog => ({
      id: relatedBlog.id,
      title: relatedBlog.title,
      author: typeof relatedBlog.author === 'object' ? relatedBlog.author.name : 'Unknown Author',
      date: relatedBlog.publishedDate ? new Date(relatedBlog.publishedDate).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }) : 'Unknown Date',
      image: typeof relatedBlog.image === 'object' ? relatedBlog.image.url : '/images/blogcard.jpeg',
      readTime: relatedBlog.readTime || '5 min read',
      excerpt: relatedBlog.excerpt,
      location: relatedBlog.location || 'Unknown Location',
    }));

    return {
      props: {
        blog,
        relatedBlogs,
      },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      notFound: true,
    };
  }
}

export default BlogPostPage;
import React, { useEffect, useState } from 'react';
import { blogAPI } from '../api';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await blogAPI.getAll();
        
        // Ensure we're setting an array
        if (res && res.data) {
          // If res.data is an array, use it directly
          if (Array.isArray(res.data)) {
            setBlogs(res.data);
          } 
          // If res.data is an object with a blogs property that's an array
          else if (res.data.blogs && Array.isArray(res.data.blogs)) {
            setBlogs(res.data.blogs);
          }
          // If res.data is an object with other structure
          else if (typeof res.data === 'object' && res.data !== null) {
            // Try to find any array property
            const arrayProps = Object.values(res.data).filter(val => Array.isArray(val));
            if (arrayProps.length > 0) {
              setBlogs(arrayProps[0]);
            } else {
              // If no array found, set empty array
              setBlogs([]);
              console.warn('No array found in response data:', res.data);
            }
          } else {
            setBlogs([]);
            console.warn('Unexpected response format:', res);
          }
        } else {
          setBlogs([]);
          console.warn('No data received from API');
        }
      } catch (err) {
        console.error('Failed to fetch blogs', err);
        setError('Failed to load blog posts. Please try again later.');
        setBlogs([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">⚠️ {error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            College Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Insights, stories, and updates from our college community
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {!Array.isArray(blogs) || blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog._id || blog.id || Math.random().toString()} 
                to={`/blogs/${blog._id || blog.id}`}
                className="group hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100"
              >
                {/* Image */}
                {blog.coverImage && (
                  <div className="overflow-hidden h-56">
                    <img
                      src={`https://api.shardulraojadhavarcollegeoflaw.com${blog.coverImage}`}
                      alt={blog.title || 'Blog post'}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span>
                      {blog.createdAt 
                        ? new Date(blog.createdAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })
                        : 'Recent'
                      }
                    </span>
                    <span>•</span>
                    <span>{blog.author || blog.authorName || 'Admin'}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                    {blog.title || 'Untitled Post'}
                  </h2>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {blog.excerpt || blog.summary || blog.content?.substring(0, 150) || 'Click to read more about this post.'}
                  </p>
                  
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    Read more 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
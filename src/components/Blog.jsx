import React from "react";
import { blogPosts } from "../mock";
import { Button } from "./ui/button";
import { Calendar, Tag, ArrowRight } from "lucide-react";

const Blog = () => {
  const handleReadMore = () => {
    // Mock external blog link
    alert(
      "Blog akan segera tersedia! Stay tuned untuk insights dan artikel menarik.",
    );
  };

  return (
    <section className="py-30 bg-[#FAFFEE]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            Latest from <span className="text-[#00A8A8]">Our Blog</span>
          </h2>
          <p className="text-lg md:text-xl text-[#0C6951] max-w-2xl mx-auto">
            Insights, tips, dan inspirasi untuk perjalanan karir dan personal
            growth Anda
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="network-card bg-white group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={handleReadMore}
            >
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-[#00A8A8]" />
                <span className="text-sm font-semibold text-[#00A8A8] uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1B263B] mb-3 group-hover:text-[#00A8A8] transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-base text-[#0C6951] leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-[#807979]">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>

              {/* Hover Accent Line */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#00A8A8] to-[#F5C542] rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            onClick={handleReadMore}
            className="btn-secondary border-2 border-[#1B263B] text-[#E3E3E3] hover:bg-[#1B263B] hover:text-white rounded-2xl px-8 py-4 h-auto font-semibold text-lg flex items-center gap-2 mx-auto"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

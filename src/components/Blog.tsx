import React from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";

const blogData = [
  {
    image: "/blog-1.png",
    title: "A New Scent of Success: The Journey of a Perfume Brand Rebrand",
  },
  {
    image: "/blog-2.png",
    title: "Revamping Glamour: How a Makeup Brand Transformed Its Image",
  },
  {
    image: "/blog-3.png",
    title:
      "Refreshing the Classics: Inside the Rebrand of a Healthy Soft Drink",
  },
  {
    image: "/blog-4.png",
    title: "Renewing Radiance: The Strategic Rebrand of a Skincare Line",
  },
];
type Props = {};

const Blog = (props: Props) => {
  return (
    <section className="py-48">
      <SectionHeader text="Blog" />
      <div className="mt-8 mb-16 flex justify-between">
        <h2>Insights on Branding</h2>
        <button
          style={{ letterSpacing: ".5px" }}
          className="border text-neutral-600 px-6 py-2 rounded-full"
        >
          See all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {blogData.map((blog) => (
          <BlogCard image={blog.image} title={blog.title} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

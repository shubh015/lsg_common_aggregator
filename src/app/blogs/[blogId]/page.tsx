import BlogPageTemplate from "@/design-systems/Templates/BlogPageTemplate";
import React from "react";

const BlogDetailPage: React.FC = () => {
  const handleShare = () => {
    // Add share functionality here
    console.log("Sharing blog post");
    // Example: window.navigator.share({ title: 'Blog post', url: window.location.href });
  };

  const handleSave = () => {
    // Add save functionality here
    console.log("Saving blog post");
  };
  return (
    <div>
      <BlogPageTemplate
        stats={{ likes: 24500, comments: 50, shares: 20 }}
        title="The Rise of Artificial Intelligence in Healthcare"
        publicationDate="21-05-2025"
        category="Healthcare"
        readingTime="10 mins"
        authorName="Ritesh Sharma"
        onShare={handleShare}
        onSave={handleSave}
        // Optional: Add a hero image
        // heroImage="/path/to/hero-image.jpg"
      />
    </div>
  );
};

export default BlogDetailPage;

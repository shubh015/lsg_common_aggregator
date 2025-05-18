import Button from '@/design-systems/Atoms/Button'
import BlogPageTemplate from '@/design-systems/Templates/BlogPageTemplate'
import React from 'react'

const BlogDetailPage: React.FC = () => {
  return (
    <div>
      <BlogPageTemplate
        stats={{ likes: 24500, comments: 50, shares: 20 }}
        title="The Rise of Artificial Intelligence in Healthcare"
        publicationDate="21-05-2025"
        category="Healthcare"
        readingTime="10 mins"
        authorName="Ritesh Sharma"
        // Optional: Add a hero image
        // heroImage="/path/to/hero-image.jpg"
      >
        {/* Optional: Add action buttons as children */}
        <Button variant="outlined" size="small">Share</Button>
        <Button variant="outlined" size="small">Save</Button>
      </BlogPageTemplate>
    </div>
  )
}

export default BlogDetailPage
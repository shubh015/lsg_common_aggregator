export interface BlogStats {
    likes: number;
    comments: number;
    shares: number;
  }
  
  export interface BlogTemplateProps {
    /**
     * Blog statistics (likes, comments, shares)
     */
    stats?: BlogStats;
    
    /**
     * Additional UI elements (buttons, actions, etc.)
     */
    children?: React.ReactNode;
    
    /**
     * Blog post title
     */
    title?: string;
    
    /**
     * Publication date in format DD-MM-YYYY
     */
    publicationDate?: string;
    
    /**
     * Blog category
     */
    category?: string;
    
    /**
     * Estimated reading time
     */
    readingTime?: string;
    
    /**
     * Author name
     */
    authorName?: string;
    
    /**
     * Hero image URL for header background
     */
    heroImage?: string;
    
    /**
     * Callback for share button click
     */
    onShare?: () => void;
    
    /**
     * Callback for save button click
     */
    onSave?: () => void;
  }
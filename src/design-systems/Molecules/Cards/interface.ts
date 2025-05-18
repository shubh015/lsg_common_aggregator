export interface CardProps {
    imageUrl?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    updatedAt?: string;
    author?: string;
    category?: string;
    stats?: {
      likes: number;
      comments: number;
      shares: number;
    };
    buttonText?: string;
    onButtonClick?: () => void;
    layout?: "blog" | "news";
    children?: React.ReactNode;
    className?: string;
  }
  
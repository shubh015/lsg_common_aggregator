export interface CardProps {
    imageUrl?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    updatedAt?: string;
    children?: React.ReactNode; // for footer content like buttons, badges
    className?: string;
  }
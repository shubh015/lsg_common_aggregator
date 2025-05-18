import React from "react";
import { CardProps } from "./interface";
import Image from "@/design-systems/Atoms/Image";
import Button from "@/design-systems/Atoms/Button";

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt = "Card Image",
  title,
  description,
  updatedAt,
  author,
  category,
  stats,
  buttonText = "View Blog",
  onButtonClick,
  layout = "blog",
  children,
  className = "",
}) => {
  const renderStats = () =>
    stats ? (
      <div className="flex gap-4 text-sm text-gray-500 dark:text-neutral-400">
        <div>❤️ {stats.likes}</div>
        <div>💬 {stats.comments}</div>
        <div>📤 {stats.shares}</div>
      </div>
    ) : null;

  return (
    <div className={className}>
      <div
        className={`bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 ${
          layout === "blog" ? "sm:flex" : ""
        } ${className}`}
      >
        {imageUrl && (
          <div
            className={`relative w-full shrink-0 rounded-t-xl overflow-hidden ${
              layout === "blog" ? "sm:rounded-s-xl sm:max-w-60 md:max-w-xs" : ""
            }`}
          >
            <Image
              className="size-full absolute top-0 start-0 object-cover"
              src={imageUrl}
              alt={imageAlt}
              width={100}
              height={100}
            />
          </div>
        )}

        <div className="flex w-full">
          <div className="p-4 flex sm:p-7 w-full justify-between">
            {category && (
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                {category}
              </p>
            )}
            <div className="flex flex-col">
              {title && (
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  {description}
                </p>
              )}
              {author && (
                <p className="mt-2 text-sm text-gray-400 dark:text-neutral-500">
                  By {author}
                </p>
              )}
              {updatedAt && (
                <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">
                  {layout === "blog"
                    ? `Published on ${updatedAt}`
                    : `Last updated ${updatedAt}`}
                </p>
              )}
              <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
                {renderStats()}
                {children && <div className="flex gap-2">{children}</div>}
                {layout === "news" && (
                  <div className="mt-3">
                    <Button onClick={onButtonClick}>{buttonText}</Button>
                  </div>
                )}
              </div>
            </div>
            {layout === "blog" && (
                  <div className="mt-3">
                    <Button onClick={onButtonClick}>{buttonText}</Button>
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

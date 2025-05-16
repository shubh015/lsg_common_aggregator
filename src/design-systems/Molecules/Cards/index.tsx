import React from "react";
import { CardProps } from "./interface";
import Image from "@/design-systems/Atoms/Image";

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt = "Card Image",
  title,
  description,
  updatedAt,
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 h-40 ${className}`}
    >
      {imageUrl && (
        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
          <Image
            className="size-full absolute top-0 start-0 object-cover"
            src={imageUrl}
            alt={imageAlt}
            width={100}
            height={100}
            
          />
        </div>
      )}

      <div className="flex flex-wrap w-full">
        <div className="p-4 flex flex-col h-full sm:p-7 w-full">
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
          <div className="mt-5 sm:mt-auto flex items-center justify-between gap-4 flex-wrap">
            {updatedAt && (
              <p className="text-xs text-gray-500 dark:text-neutral-500">
                Last updated {updatedAt}
              </p>
            )}
            {/* Dynamic content: buttons, badges, icons, etc. */}
            {children && <div className="flex gap-2">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

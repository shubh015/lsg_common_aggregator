import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  iconLeft,
  iconRight
}) => {
  const finalDisabled = disabled || loading;

  const baseClasses = [
    "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border",
    "border-gray-200 text-gray-500",
    "hover:border-blue-600 hover:text-blue-600",
    "focus:outline-hidden focus:border-blue-600 focus:text-blue-600",
    "disabled:opacity-50 disabled:pointer-events-none",
    "dark:border-neutral-700 dark:text-neutral-400",
    "dark:hover:text-blue-500 dark:hover:border-blue-600",
    "dark:focus:text-blue-500 dark:focus:border-blue-600",
    fullWidth && "w-full",
    finalDisabled ? "cursor-auto" : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={finalDisabled}
    >
      {loading ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-gray-400"></div>
      ) : (
        <>
          {iconLeft && <span className="icon-left">{iconLeft}</span>}
          {children}
          {iconRight && <span className="icon-right">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;

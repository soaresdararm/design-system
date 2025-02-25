import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
}) => {
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 border ",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    accent: "bg-green-500 text-white hover:bg-green-600",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} ${sizeStyles[size]} rounded-md transition duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;

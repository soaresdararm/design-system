import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Enter text",
  variant = "primary",
  size = "medium",
}) => {
  const variantStyles = {
    primary: "bg-white text-gray-700 border-gray-500 focus:ring-gray-500",
    secondary: "bg-gray-100 text-gray-700 border-gray-500 focus:ring-gray-500",
    accent: "bg-green-100 text-green-700 border-green-500 focus:ring-green-500",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded-md ${variantStyles[variant]} ${sizeStyles[size]} focus:outline-none focus:ring-2 transition duration-200`}
    />
  );
};

export default Input;

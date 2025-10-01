import React from "react";
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
    >
      {label}
    </button>
  );
};

export default Button;

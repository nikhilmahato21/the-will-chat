"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disabled && " opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900 " : "text-white",
        danger &&
          "bg-rose-400 hover:bg-rose-500 focus-visible:outline-rose-500",
        !secondary &&
          !danger &&
          "bg-stone-900 hover:bg-stone-800 focus-visible:outline-stone-600"
      )}
    >
      {children}
    </button>
  );
};
  
export default Button;

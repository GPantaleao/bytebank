import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'default' | 'ghost';
  outline?: boolean;
  rounded?: boolean;
  label?: string;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  className?: string;
  classNameIcon?: string;
}

export const Button = ({ 
  variant = 'primary', 
  outline = false,
  rounded = false,
  label, 
  iconLeft: IconLeft, 
  iconRight: IconRight,
  className = '',
  classNameIcon = '',
  ...props 
}: ButtonProps) => {
  
  const variants = {
    primary: {
      solid: 'bg-primary-600 text-white hover:bg-primary-700',
      outline: 'border-primary-600 text-primary-600 hover:bg-primary-600/10'
    },
    secondary: {
      solid: 'bg-secondary-600 text-gray-800 hover:bg-secondary-300 border-secondary-600',
      outline: 'border-secondary-600 text-secondary-600 hover:bg-secondary-50'
    },
    danger: {
      solid: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border-red-600 text-red-600 hover:bg-red-50'
    },
    default: {
      solid: 'bg-gray-200 text-gray-700 hover:bg-gray-300 border-gray-200 text-primary-600',
      outline: 'border-gray-300 text-gray-600 hover:bg-gray-100'
    },
    ghost: {
      solid: 'text-primary-600 hover:bg-primary-50 border-transparent',
      outline: 'text-primary-600 hover:bg-primary-50 border-transparent'
    }
  };

  const selectedVariant = variants[variant] || variants.primary;
  const variantStyle = outline ? selectedVariant.outline : selectedVariant.solid;
  const borderStyle = variant === 'ghost' && !outline ? '' : 'border-2';
  
  const shapeStyle = rounded 
    ? 'w-10 h-10 rounded-full aspect-square flex-shrink-0' 
    : 'rounded-lg py-3 px-6';

  return (
    <button 
      className={`font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer ${shapeStyle} ${borderStyle} ${variantStyle} ${className}`}
      aria-label={label}
      {...props}
    >
      {IconLeft && <IconLeft size={18} className={classNameIcon} />}
      {label && <span>{label}</span>}
      {IconRight && <IconRight size={18} className={classNameIcon} />}
    </button>
  );
};

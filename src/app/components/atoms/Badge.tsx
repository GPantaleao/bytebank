import React from "react";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export const Badge = ({ children, icon: Icon, className }: BadgeProps) => (
  <span className={`flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-600 ${className}`}>
    {Icon && <Icon size={14} className="text-gray-500" />}
    <span>{children}</span>
  </span>
);

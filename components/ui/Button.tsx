import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  icon: Icon,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors px-6 py-3";
  
  const variantStyles = {
    primary:
      "bg-brand-red text-white hover:bg-[#b84535] active:bg-[#a03a2c]",
    outline:
      "bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-cream active:bg-brand-navy/90",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // If href starts with "tel:", render as anchor tag
  if (href?.startsWith("tel:")) {
    return (
      <a href={href} className={`${combinedClassName} whitespace-nowrap`} onClick={onClick}>
        {Icon && <Icon size={16} className="flex-shrink-0" />}
        <span className="whitespace-nowrap">{children}</span>
      </a>
    );
  }

  // If href exists, render as Next.js Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {Icon && <Icon size={20} />}
        {children}
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}


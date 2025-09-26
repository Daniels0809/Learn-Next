import React from "react";

interface BadgeProps {
  label: string;
  status?: "success" | "warning" | "info" | "error" | "neutral";
  icon?: React.ReactNode;
}

export const Badge = ({ label, status = "neutral", icon }: BadgeProps) => {
  return (
    <label>
      <div className={`badge ${status === "success" ? "badge--success" : status === "warning" ? "badge--warning" : status === "info" ? "badge--info" : status === "error" ? "badge--error" : "badge--neutral"}`}>
        {label}
        {icon}
      </div>
    </label>
  );
};

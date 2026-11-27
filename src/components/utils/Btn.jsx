"use client";

import React from "react";

export default function Btn({ className = "", children, variant = "primary" }) {
  const base = variant === "outline" ? "actionBtn-outline" : "actionBtn";
  return <span className={`${base} ${className}`}>{children}</span>;
}

"use client";

import React from "react";

import { useDroppable } from "@dnd-kit/core";

interface Props {
  id: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
}

export const DroppableBox = ({
  id,
  label,
  children,
  className = "",
}: Props) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} className={`relative ${className}`}>
      <div className="absolute top-1 left-1">{label}</div>
      {children}
    </div>
  );
};

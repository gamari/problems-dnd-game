"use client";

import React from "react";

import { useDraggable } from "@dnd-kit/core";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const DraggableNumber = ({ id, children, className }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: `translate(${transform?.x}px, ${transform?.y}px)`,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={className}
    >
      {children}
    </div>
  );
};

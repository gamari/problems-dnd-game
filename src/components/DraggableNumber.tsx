"use client";

import React, { useEffect, useState } from "react";

import { useDraggable } from "@dnd-kit/core";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const DraggableNumber = ({ id, children, className }: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  useEffect(() => {
    if (isDragging) {
      console.log(setNodeRef);
    }
  }, [isDragging]);

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined
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

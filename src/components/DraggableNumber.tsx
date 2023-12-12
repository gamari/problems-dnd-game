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

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isDragging && transform) {
      setPosition({
        x: transform.x + prevPosition.x,
        y: transform.y + prevPosition.y,
      });
    } else {
      setPrevPosition(position);
    }
  }, [isDragging, transform]);

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
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

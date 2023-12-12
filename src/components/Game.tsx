"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React, { useEffect, useState } from "react";
import { DroppableBox } from "./DroppableBox";
import { DraggableNumber } from "./DraggableNumber";
import { useNumbers } from "@/hooks/useNumbers";

function generateUniqueRandomNumbers(count: number, max: number) {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * max + 1));
  }
  return [...numbers];
}

export const Game = () => {
  const [numbers] = useState<number[]>(generateUniqueRandomNumbers(5, 10));
  const {
    numbers: oddNumbers,
    addNumber: addOddNumber,
    removeNumber: removeOddNumber,
  } = useNumbers();
  const {
    numbers: evenNumbers,
    addNumber: addEvenNumber,
    removeNumber: removeEvenNumber,
  } = useNumbers();

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    const number = parseInt(active.id as string);

    if (over) {
      removeEvenNumber(number);
      removeOddNumber(number);

      if (over.id === "odd") {
        addOddNumber(number);
      } else if (over.id === "even" && number % 2 === 0) {
        addEvenNumber(number);
      }
    }
  }

  function checkAnswer() {
    if (oddNumbers.length + evenNumbers.length !== 5) {
      alert("すべての数字をボックスにドラッグしてください。");
      return;
    }

    if (
      oddNumbers.every((num) => num % 2 !== 0) &&
      evenNumbers.every((num) => num % 2 === 0)
    ) {
      alert("正解です！");
    } else {
      alert("不正解です。");
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <div className="flex flex-row gap-10">
          <DroppableBox
            id="odd"
            label="奇数"
            className="h-[200px] w-[200px] bg-orange-50"
          />
          <DroppableBox
            id="even"
            label="偶数"
            className="h-[200px] w-[200px] bg-sky-50"
          />
        </div>
        <div className="flex flex-row gap-4">
          {numbers.map((num) => (
            <DraggableNumber
              key={num}
              id={num.toString()}
              className="rounded-full bg-green-500 text-white h-6 w-6 flex items-center justify-center"
            >
              {num}
            </DraggableNumber>
          ))}
        </div>
        <button onClick={checkAnswer}>解答</button>
      </div>
    </DndContext>
  );
};

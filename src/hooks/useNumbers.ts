import { useState } from "react"

export const useNumbers = (initNumbers?: number[]) => {
    const [numbers, setNumbers] = useState<number[]>(initNumbers ?? []);

    const addNumber = (number: number) => {
        setNumbers([...numbers, number]);
    }

    const removeNumber = (number: number) => {
        setNumbers(numbers.filter(n => n !== number));
    }

    return {
        numbers,
        addNumber,
        removeNumber
    }
}
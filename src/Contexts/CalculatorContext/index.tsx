
import React, { useState } from 'react';
import { createContext } from "react";


export const CalculatorContext = createContext({});


interface CalculatorCtxData{
    currentNumIdx: number;
    currentOpIdx: number;
    numbers: string[];
    operators: string[];
};

const defaultState: CalculatorCtxData = {
    currentNumIdx: 0,
    currentOpIdx: 0,
    numbers: [],
    operators: []
}

type Props = {
    children: React.ReactNode
};

export const CalculatorProvider = ({ children }: Props) => {
    const [data, setData] = useState(defaultState)

    const addDigit = (value: string) => {
        const { numbers, currentNumIdx } = data;
        numbers[currentNumIdx] = !numbers[currentNumIdx] ? value : numbers[currentNumIdx].concat(value);
        setData({ ...data, numbers });
    }

    const delDigit = () => {
        const { numbers, currentNumIdx } = data;
        let idx = currentNumIdx;

        if(!numbers[currentNumIdx]) {
            idx -= 1;
            if(idx < 0) {
                return; 
            }
        }
        numbers[idx] = numbers[idx].slice(0, numbers[idx].length - 1)
        setData({...data, numbers, currentNumIdx: idx});
    }

    const handleOperator = (value) => {
        const { numbers, currentNumIdx } = data;
    }

    const handleSign = () => {
        const { numbers, currentNumIdx } = data;
        if(!numbers[currentNumIdx]) {
            return; 
        }
        
        const numberLength = numbers[currentNumIdx].length
        numbers[currentNumIdx] = numbers[currentNumIdx][0] === '-' ? 
            numbers[currentNumIdx].slice(1, numberLength) : 
            `-${numbers[currentNumIdx]}`;
        
        setData({...data, numbers});
    }

    const clearAll = () => {
        let { numbers } = data;
        numbers = []
        setData({...data, numbers });
    }

    return (
        <CalculatorContext.Provider 
            value={{ 
                data, 
                addDigit, 
                delDigit, 
                clearAll,
                handleSign, 
            }}
        >
            { children }
        </CalculatorContext.Provider>
    )
}

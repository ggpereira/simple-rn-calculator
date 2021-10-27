
import { NUMBER_UNARY_OPERATORS } from '@babel/types';
import React, { useState } from 'react';
import { createContext } from "react";


export const CalculatorContext = createContext({});


interface CalculatorCtxData{
    values: string[];
    memory: string[];
    finish: boolean;
};

const defaultState: CalculatorCtxData = {
    values: [],
    finish: false,
    memory: []
};

type Props = {
    children: React.ReactNode
};

const operations: {[key: string]: any} = {
    "+": (a: number, b: number): number => {
        return a + b;
    },
    "-": (a: number, b: number): number => {
        return a - b;
    },
    "*": (a: number, b: number): number => {
        return a * b;
    },
    "/": (a: number, b: number): number => {
        return a / b;
    },
    "%": (a: number, b: number): number => {
        return a % b;
    }
}

export const CalculatorProvider = ({ children }: Props) => {
    const [data, setData] = useState(defaultState);


    const isOperator = (value: string): Boolean => {
        switch(value) {
            case '+': 
                return true;
            case '-':
                return true;
            case '*':
                return true;
            case '/': 
                return true;
            case '%':
                return true;
            default:
                return false 
        }
    }


    const addDigit = (value: string) => {
        const { values, finish } = data;

        if((isOperator(value) && isOperator(values[values.length - 1])) || (isOperator(value) && values.length <= 0)) return;

        if(finish) {
            values.length = 0;
        }

        values.push(value);
        setData({ ...data, values: values, finish: false })
    }

    const delDigit = (value: string) => {
        const { values, finish } = data;
        if(finish) return;
        values.pop()
        setData({ ...data, values: values })
    }

    const clearAll = () => {
        const { values } = data;
        values.length = 0; 
        setData({...data, values: values})
    }

    const getResult = () => {
        const { values, finish } = data;
        let v = values.join('')
        const separators = ['\\\/', '\\\+', '\\\-', '\\\*', '\\\%'];
        const tokens = v.split(new RegExp('('+separators.join('|')+')', 'g'))
        if(tokens.length < 3 || tokens[tokens.length - 1].length <= 0 || finish) return;
        tokens.push("=");

        let a = +tokens[0];
        let op = tokens[1];
        let b = +tokens[2];
        let res = operations[op](a, b)
        let current = tokens[3]
        let index = 3;
        while(current !== '=') {
            let op = tokens[index]
            let c = +tokens[index + 1]
            res = operations[op](res, c);
            index += 2
            current = tokens[index]
        }

        values.push('=');
        values.push(res);
        save(values.join(''))
        setData({...data, values: values, finish: true});
    }


    const save = (item: string) => {
        const { memory } = data;
        memory.push(item);

        if(memory.length > 15) {
            memory.shift()
        }

        setData({ ...data, memory: memory });
    }

    const clearMemory = () => {
        const { memory } = data;
        memory.length = 0;
        setData({ ...data, memory: memory });
    }

    return (
        <CalculatorContext.Provider 
            value={{ 
                data, 
                addDigit, 
                delDigit, 
                clearAll,
                getResult,
                clearMemory 
            }}
        >
            { children }
        </CalculatorContext.Provider>
    )
}

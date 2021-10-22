import React from "react";
import { FlatList, View, Text } from 'react-native';

import { styles } from "./styles";

export const MemoryList = () => {
    const memoryData = [
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        },
        {
            firstOperand: 3,
            secondOperand: 4,
            result: -1,
            operationSymbol: '-'
        },
        {
            firstOperand: 3,
            secondOperand: 5,
            result: 15,
            operationSymbol: '*'
        },
        {
            firstOperand: 4,
            secondOperand: 2,
            result: 2,
            operationSymbol: '/'
        },
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        },
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        },
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        },
        {
            firstOperand: 4,
            secondOperand: 2,
            result: 2,
            operationSymbol: '/'
        },
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        },
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        },
        {
            firstOperand: 1,
            secondOperand: 2,
            result: 3,
            operationSymbol: '+'
        }
    ];


    const renderItem = ({ item }: any) => {
        const text = `${item.firstOperand} ${item.operationSymbol} ${item.secondOperand} = ${item.result}`
        return (
            <Text style={styles.text}>{text}</Text>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={memoryData} renderItem={renderItem} keyExtractor={(_, index) => index.toString() } showsVerticalScrollIndicator={false}/>
        </View>
    )
}
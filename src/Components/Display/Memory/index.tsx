import React, {  useRef, useContext } from "react";
import { FlatList, View, Text } from 'react-native';
import { CalculatorContext } from "../../../Contexts/CalculatorContext";
import { styles } from "./styles";

export const MemoryList = () => {

    const context = useContext(CalculatorContext);
    const { memory } = context.data;
    const displayMemory = useRef(null);

    const renderItem = ({ item }: any) => {
        return (
            <Text numberOfLines={1}  ellipsizeMode="head" style={styles.text}>{item}</Text>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                ref ={displayMemory} 
                data={memory} 
                renderItem={renderItem} 
                keyExtractor={(_, index) => index.toString() } 
                showsVerticalScrollIndicator={false}
                onContentSizeChange={() => displayMemory?.current?.scrollToEnd({ animated: true })}
            />
        </View>
    )
}
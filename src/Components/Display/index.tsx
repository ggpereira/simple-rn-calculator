import React, { useContext, useRef, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { MemoryList } from './Memory';
import { CalculatorContext } from '../../Contexts/CalculatorContext';
import { styles } from './styles';

export const Display = () => {
    const context = useContext(CalculatorContext);
    const displayText = useRef(null);
    const { values } = context.data;

    const renderItem = ({ item }: any) => {
        return (
            <Text style={styles.mainText}>{item}</Text>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.memoryContainer}>
                <Text style={styles.memoryContainerHeader}>Memory</Text>
                <MemoryList />
            </View>
            <View style={styles.mainContainer}>
                <View style={{ height: '20%', paddingHorizontal: 5 }}>
                    <FlatList 
                        ref={displayText} data={values}
                        renderItem={renderItem} 
                        keyExtractor={(_, index) => index.toString() } 
                        horizontal showsHorizontalScrollIndicator={false}
                        onContentSizeChange={() => displayText?.current?.scrollToEnd({ animated: true }) } 
                    />
                </View>
             </View>
        </View>
    )
}
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF5733',
        elevation: 5,
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

type Props = {
    label: string;
    value: string;
    type: string;
    handlePress: any;
    customStyle?: any;
}

export const Button = ({ label, value, type, handlePress, customStyle }: Props) => {
    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={() => handlePress(value)}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Button } from './Button';
import { CalculatorContext } from '../../Contexts/CalculatorContext';

export const KeyboardContainer = () => {
    const context  = useContext(CalculatorContext)
    const { 
        addDigit, 
        delDigit, 
        clearAll,
        getResult,
        clearMemory 
    } = context;

    return (
        <View>
            <View style={styles.container}>
                <Button label={'Clear'} value="C" type="command" handlePress={clearAll} />
                <Button label={'%'}  value="%"  type="operand" handlePress={addDigit} />
                <Button label={'CM'} value="CM" type="command" handlePress={clearMemory} />
                <Button label={'DEL'} value="delete" type="command" handlePress={delDigit} />
            </View>

            <View style={styles.container}>
                <Button label={'7'}  value="7" type="value" handlePress={addDigit} />
                <Button label={'8'} value="8" type="value" handlePress={addDigit} />
                <Button label={'9'} value="9" type="value" handlePress={addDigit} />
                <Button label={'/'} value="/" type="operand" handlePress={addDigit} />
            </View>

            <View style={styles.container}>
                <Button label={'4'} value="4" type="value" handlePress={addDigit} />
                <Button label={'5'} value="5" type="value" handlePress={addDigit} />
                <Button label={'6'} value="6" type="value" handlePress={addDigit} />
                <Button label={'*'} value="*" type="operand" handlePress={addDigit} />
            </View>

            <View style={styles.container}>
                <Button label={'1'} value="1" type="value" handlePress={addDigit} />
                <Button label={'2'} value="2" type="value" handlePress={addDigit} />
                <Button label={'3'} value="3" type="value" handlePress={addDigit} />
                <Button label={'-'} value="-" type="operand" handlePress={addDigit} />
            </View>

            <View style={styles.container}>
                <Button label={'0'} value="0" type="value" handlePress={addDigit}/>
                <Button label={'.'} value="." type="value" handlePress={addDigit}/>
                <Button label={'='} value="=" type="command" handlePress={getResult}/>
                <Button label={'+'} value="+" type="operand" handlePress={addDigit}/>
            </View>
        </View>
    )
}
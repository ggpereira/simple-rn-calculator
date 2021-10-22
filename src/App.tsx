import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { Display } from './Components/Display';
import { KeyboardContainer } from './Components/Keyboard';
import { styles } from './styles';
import { CalculatorProvider } from './Contexts/CalculatorContext';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorProvider>
        <Display />
        <KeyboardContainer />
      </CalculatorProvider>
    </SafeAreaView>
  );
};

export default App;

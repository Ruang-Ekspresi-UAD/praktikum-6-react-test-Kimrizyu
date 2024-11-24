import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe('Counter Component', () => {
    test('should render initial count value as 0', () => {
      render(<Counter />);
      const counterValue = screen.getByTestId('counter-value');
      expect(counterValue).toHaveTextContent('0');
    });
    test('should increment count when increment button is clicked', () => {
      render(<Counter />);
      const incrementButton = screen.getByTestId('increment-button');
      const counterValue = screen.getByTestId('counter-value');
  
      fireEvent.click(incrementButton);
      expect(counterValue).toHaveTextContent('1');
  
      fireEvent.click(incrementButton);
      expect(counterValue).toHaveTextContent('2');
    });
    test('should decrement count when decrement button is clicked', () => {
      render(<Counter />);
      const decrementButton = screen.getByTestId('decrement-button');
      const counterValue = screen.getByTestId('counter-value');
      fireEvent.click(decrementButton);
      expect(counterValue).toHaveTextContent('-1');
      fireEvent.click(decrementButton);
      expect(counterValue).toHaveTextContent('-2');
    });
  });
describe('Display Component', () => {
    test('display value from display component', () => {
        render(<Display />);
        const displayValue = screen.getByTestId('display-value');
        expect(displayValue).toHaveTextContent('Value');
    });
 });
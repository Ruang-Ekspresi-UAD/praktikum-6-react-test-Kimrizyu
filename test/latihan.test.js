import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
    test('should display initial count value as 0', () => {
      render(<Counter />);
      const counterValue = screen.getByTestId('counter-value');
      expect(counterValue).toHaveTextContent('0');
    });
    test('should increment the count', () => {
      render(<Counter />);
      const incrementButton = screen.getByTestId('increment-button');
      fireEvent.click(incrementButton);
      const counterValue = screen.getByTestId('counter-value');
      expect(counterValue).toHaveTextContent('1');
    });
    test('should decrement the count', () => {
      render(<Counter />);
      const decrementButton = screen.getByTestId('decrement-button');
      fireEvent.click(decrementButton);
      const counterValue = screen.getByTestId('counter-value');
      expect(counterValue).toHaveTextContent('-1');
    });
    test('should reset the count to 0', () => {
      render(<Counter />);
      const incrementButton = screen.getByTestId('increment-button');
      const resetButton = screen.getByTestId('reset-button');
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(resetButton);
      const counterValue = screen.getByTestId('counter-value');
      expect(counterValue).toHaveTextContent('0');
    });
  });
  describe('Greeting Component', () => {
    test('should display My Name', () => {
      const name = 'Rizky Ayu Bibit Septianie';
      render(<Greeting name={name} />);
      const greetingMessage = screen.getByTestId('greeting');
      expect(greetingMessage).toHaveTextContent(`Hello, ${name}`);
    });
    test('should display My Lecture', () => {
        const name = 'Farid Suryanto, S.Pd., MT.';
        render(<Greeting name={name} />);
        const greetingMessage = screen.getByTestId('greeting');
        expect(greetingMessage).toHaveTextContent(`Hello, ${name}`);
    });
    test('should handle empty name prop gracefully', () => {
      render(<Greeting name="" />);
      const greetingMessage = screen.getByTestId('greeting');
      expect(greetingMessage).toHaveTextContent('Hello,');
    });
  });
  describe('AlertButton Component', () => {
    test('should display the alert with correct message', () => {
      const message = 'This is an alert!';
      window.alert = jest.fn();
      render(<AlertButton message={message} />);
      const alertButton = screen.getByTestId('alert-button');
      fireEvent.click(alertButton);
      expect(window.alert).toHaveBeenCalledWith(message);
    });
  });
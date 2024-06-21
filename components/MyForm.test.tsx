import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyForm from './MyForm';
import {screen} from '@testing-library/react-native'


describe('MyForm', () => {
  test('calls onSubmit function on successful login', () => {
    const mockOnSubmit = jest.fn(); 
    const { getByPlaceholderText, getByText } = render(<MyForm onSubmit={mockOnSubmit} title="Login" />);

  
    fireEvent.changeText(getByPlaceholderText('username'), 'validUser');
    fireEvent.changeText(getByPlaceholderText('****'), 'validPass');

    const loginButton = screen.getByTestId("LoginButtonTest")
    fireEvent.press(loginButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('validUser', 'validPass');

  });
});

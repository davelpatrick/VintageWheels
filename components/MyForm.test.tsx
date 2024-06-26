import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyForm from './MyForm';
import { screen } from '@testing-library/react-native';

describe('MyForm', () => {
  test('calls onSubmit function on successful login', () => {
    const mockOnSubmit = jest.fn(); 
    const { getByPlaceholderText, getByText } = render(<MyForm onSubmit={mockOnSubmit} title="Login" />);

    fireEvent.changeText(getByPlaceholderText('username'), 'validUser');
    fireEvent.changeText(getByPlaceholderText('****'), 'validPass');

    const loginButton = screen.getByTestId("LoginButtonTest");
    fireEvent.press(loginButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('validUser', 'validPass');
  });

  test('username field does not accept numbers', () => {
    const mockOnSubmit = jest.fn();
    const { getByPlaceholderText } = render(<MyForm onSubmit={mockOnSubmit} title="Login" />);

    const usernameInput = getByPlaceholderText('username');

    fireEvent.changeText(usernameInput, 'user123');

    expect(usernameInput.props.value).toBe('');
  });
});

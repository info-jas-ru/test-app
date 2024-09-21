import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Список/i);
  expect(linkElement).toBeInTheDocument();
});

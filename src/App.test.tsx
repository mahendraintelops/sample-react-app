import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn reactjs link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn reactjs/i);
  expect(linkElement).toBeInTheDocument();
});

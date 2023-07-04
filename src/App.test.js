import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders logo', () => {
  const { container } = render(<App />);
  const logElem = container.querySelector('.App-logo');
  expect(logElem).toBeInTheDocument();
});

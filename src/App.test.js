import { render, screen } from '@testing-library/react';
import App from './App';
import Counters from './components/counters';
import Movies from './components/movies';

test('renders learn react link', () => {
  render(<Movies />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import AxeGame from './AxeGame';

test('renders learn react link', () => {
  render(<AxeGame />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

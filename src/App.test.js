import { render, screen } from '@testing-library/react';
import Title from './Title';

test('Renders the BookingForm heading', () => {
  render(<Title />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('checks if Banana is present in the list', () => {
  render(<ItemList />);
  const item = screen.getByText('Banana');
  expect(item).toBeInTheDocument();
});

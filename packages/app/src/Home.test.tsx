import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const inputElement = screen.getByRole(/textbox/i);
  expect(inputElement).toBeInTheDocument();
});

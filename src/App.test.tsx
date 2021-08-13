import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText(/Resources/i)).toBeInTheDocument();
  expect(
    screen.getByText(
      /Copyright © tosincoker26@gmail.com 2021. All rights reserved./i
    )
  ).toBeInTheDocument();
});

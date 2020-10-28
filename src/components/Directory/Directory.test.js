import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Directory from './Directory';

describe('<Directory />', () => {
  test('it should mount', () => {
    render(<Directory />);
    
    const directory = screen.getByTestId('Directory');

    expect(directory).toBeInTheDocument();
  });
});
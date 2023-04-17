import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Socials from './Socials';

describe('<Socials />', () => {
  test('it should mount', () => {
    render(<Socials />);
    
    const socials = screen.getByTestId('Socials');

    expect(socials).toBeInTheDocument();
  });
});
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyEditor from './MyEditor';

describe('<MyEditor />', () => {
  test('it should mount', () => {
    const [content, setContent] = useState<any>({})
    render(<MyEditor setContent={setContent}/>);
    
    const myEditor = screen.getByTestId('MyEditor');

    expect(myEditor).toBeInTheDocument();
  });
});
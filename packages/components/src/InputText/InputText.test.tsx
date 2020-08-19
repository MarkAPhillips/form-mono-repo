import { render, RenderResult,screen } from '@testing-library/react';
import React from 'react';

import { InputText } from './InputText';

describe('InputText tests', () => {
  let view: RenderResult;
  beforeEach(() => {
    view = render(<InputText label="First Name" name="firstName" />);
  });

  it('should render the input text component', () => {
    expect(view.container).not.toBeNull();
  });

  it('should render a label with First Name', () => {
    const matcher = screen.getByLabelText(/First Name/i);
    expect(matcher).not.toBeNull();
  });

  it('should render a input text with the correct label', () => {
    const matcher = screen.getByRole('textbox', { name: /First Name/i });
    expect(matcher).not.toBeNull();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { IButtonProps } from './Button.definitions';

describe('Button Component', () => {
  let props: IButtonProps;

  beforeEach(() => {
    props = {
      children: undefined,
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('Button should be have "test configfured" text', () => {
    props.children = 'Test configured';
    const { getByText } = renderComponent();
    const testComponent = getByText('Test configured');
    expect(testComponent).toBeDefined();
  });
});

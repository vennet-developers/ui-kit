import React from 'react';
import { render } from "@testing-library/react";

import Button, { IButtonProps }  from "./Button";

describe("Button Component", () => {
  let props: IButtonProps;

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Test {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("test-component");
    expect(testComponent).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId("test-component");
    expect(testComponent).toHaveClass("test-component-secondary");
  });
});

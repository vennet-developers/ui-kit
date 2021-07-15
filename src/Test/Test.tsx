import React, { FC  } from "react";
import "./Test.scss";

export interface ITestProps {
  theme: "primary" | "secondary";
}

const Test: FC<ITestProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default Test;

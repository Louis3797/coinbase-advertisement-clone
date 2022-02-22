import { render } from "@testing-library/react";
import App from "./App";

test("renders app correctly", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeTruthy();
});

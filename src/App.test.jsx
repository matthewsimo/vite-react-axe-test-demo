import { axe } from "vitest-axe";
import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("should have no axe violations", async () => {
  const { container } = render(<App />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

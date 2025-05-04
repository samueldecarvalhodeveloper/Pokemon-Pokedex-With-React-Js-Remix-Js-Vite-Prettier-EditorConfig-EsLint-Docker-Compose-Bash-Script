import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import SmoothScroller from "../../../../components/smooth_scroller/smooth_scroller";

describe("Test Component SmoothScroller", () => {
  test("Test If Component Renders", () => {
    const { container } = render(<SmoothScroller />);

    expect(container.querySelector("a")).toBeTruthy();
  });
});

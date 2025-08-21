import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Banner from "../../../../components/banner/banner";

describe("Test Component Banner", () => {
  test("Test If Component Renders", () => {
    const { container } = render(<Banner />);

    expect(container.querySelector("section")).toBeTruthy();
  });
});

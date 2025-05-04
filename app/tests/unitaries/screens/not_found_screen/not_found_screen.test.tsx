import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import NotFoundScreen from "../../../../screens/not_found_screen/not_found_screen";
import { NOT_FOUND_PAGE_INFORMATION_TEXT } from "../../../../constants/user_interface_constants";

describe("Test Screen NotFound", () => {
  test("Test If Screen Renders", () => {
    const { getByText } = render(<NotFoundScreen />);

    expect(getByText(NOT_FOUND_PAGE_INFORMATION_TEXT)).toBeTruthy();
  });
});

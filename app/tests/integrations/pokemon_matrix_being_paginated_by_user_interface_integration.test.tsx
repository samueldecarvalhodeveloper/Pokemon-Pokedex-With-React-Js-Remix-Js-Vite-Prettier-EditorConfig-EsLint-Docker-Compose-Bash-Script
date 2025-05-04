import { jest, describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "../../constants/pokemon_constants";
import {
  FIRST_PAGE,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
} from "../../constants/user_interface_constants";
import PokemonListingScreen from "../../screens/pokemon_listing_screen/pokemon_listing_screen";

jest.mock("@remix-run/react", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));

describe("Pokemon Matrix Being Paginated By User Interface Integration", () => {
  test("Test Pokemon Matrix Being Paginated", () => {
    const { getByText, getByTestId } = render(
      <PokemonListingScreen
        matrixOfPokemons={MATRIX_OF_POKEMON_ENTITY_OBJECT}
      />,
    );

    expect(getByText(MOCK_POKEMON_NAME)).toBeTruthy();

    fireEvent.click(getByTestId(PAGINATION_NEXT_BUTTON_TEST_ID));

    try {
      getByTestId(PAGINATION_NEXT_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }

    fireEvent.click(getByTestId(PAGINATION_PREVIOUS_BUTTON_TEST_ID));

    try {
      getByTestId(PAGINATION_PREVIOUS_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }

    fireEvent.change(getByTestId(PAGE_SELECTOR_TEST_ID), {
      target: { value: FIRST_PAGE + 1 },
    });

    try {
      getByTestId(PAGINATION_NEXT_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});

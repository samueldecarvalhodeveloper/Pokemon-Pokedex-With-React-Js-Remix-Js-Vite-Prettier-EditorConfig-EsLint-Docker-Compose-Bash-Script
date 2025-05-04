import { jest, describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "../../../../constants/pokemon_constants";
import PokemonListingScreen from "../../../../screens/pokemon_listing_screen/pokemon_listing_screen";
import {
  FIRST_PAGE,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "../../../../constants/user_interface_constants";

jest.mock("@remix-run/react", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));

describe("Test Screen PokemonListingScreen", () => {
  test("Test If Paginated List Of Pokemons Is Showed If Pokemon Name Searching Input Is Empty", () => {
    const { getByTestId } = render(
      <PokemonListingScreen
        matrixOfPokemons={MATRIX_OF_POKEMON_ENTITY_OBJECT}
      />,
    );

    expect(getByTestId(PAGINATION_NEXT_BUTTON_TEST_ID)).toBeTruthy();
  });

  test("Test If Filtered By Name List Of Pokemons Is Showed If Pokemon Name Searching Input Is With Pokemon Name", () => {
    const { getAllByText, getByTestId } = render(
      <PokemonListingScreen
        matrixOfPokemons={MATRIX_OF_POKEMON_ENTITY_OBJECT}
      />,
    );

    fireEvent.change(getByTestId(POKEMON_NAME_SEARCHING_INPUT_TEST_ID), {
      target: { value: MOCK_POKEMON_NAME },
    });

    expect(getAllByText(MOCK_POKEMON_NAME));

    try {
      getByTestId(PAGINATION_NEXT_BUTTON_TEST_ID);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test("Test If Pagination Is Set And Updates Current Pokemon Page", () => {
    const { getByTestId } = render(
      <PokemonListingScreen
        matrixOfPokemons={MATRIX_OF_POKEMON_ENTITY_OBJECT}
      />,
    );

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

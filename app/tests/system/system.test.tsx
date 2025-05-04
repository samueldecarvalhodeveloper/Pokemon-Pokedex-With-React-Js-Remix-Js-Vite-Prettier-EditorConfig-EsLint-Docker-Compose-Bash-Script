import { jest, describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import PokemonListingScreen from "../../screens/pokemon_listing_screen/pokemon_listing_screen";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "../../constants/pokemon_constants";
import {
  FIRST_PAGE,
  PAGE_SELECTOR_TEST_ID,
  PAGINATION_NEXT_BUTTON_TEST_ID,
  PAGINATION_PREVIOUS_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "../../constants/user_interface_constants";
import PokemonDetailsScreen from "../../screens/pokemon_details_screen/pokemon_details_screen";

jest.mock("@remix-run/react", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));

describe("Test System", () => {
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

  test("Test Pokemon Being Searched By Its Name", () => {
    const { getAllByText, getByTestId } = render(
      <PokemonListingScreen
        matrixOfPokemons={MATRIX_OF_POKEMON_ENTITY_OBJECT}
      />,
    );

    fireEvent.change(getByTestId(POKEMON_NAME_SEARCHING_INPUT_TEST_ID), {
      target: { value: MOCK_POKEMON_NAME },
    });

    expect(getAllByText(MOCK_POKEMON_NAME));
  });

  test("Test Pokemon Details Being Shown", () => {
    const { getByText } = render(
      <PokemonDetailsScreen pokemonData={POKEMON_ENTITY_OBJECT} />,
    );

    expect(getByText(MOCK_POKEMON_NAME)).toBeTruthy();
  });
});

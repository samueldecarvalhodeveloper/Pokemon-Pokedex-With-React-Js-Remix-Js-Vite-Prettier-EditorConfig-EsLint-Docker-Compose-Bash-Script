import { jest, describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import {
  MATRIX_OF_POKEMON_ENTITY_OBJECT,
  MOCK_POKEMON_NAME,
} from "../../constants/pokemon_constants";
import PokemonListingScreen from "../../screens/pokemon_listing_screen/pokemon_listing_screen";
import {
  PAGINATION_NEXT_BUTTON_TEST_ID,
  POKEMON_NAME_SEARCHING_INPUT_TEST_ID,
} from "../../constants/user_interface_constants";

jest.mock("@remix-run/react", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));

describe("Pokemon Data Being Searched By Its Name By User Interface Integration", () => {
  test("Test Pokemon Data Being Searched By Its Name", () => {
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
});

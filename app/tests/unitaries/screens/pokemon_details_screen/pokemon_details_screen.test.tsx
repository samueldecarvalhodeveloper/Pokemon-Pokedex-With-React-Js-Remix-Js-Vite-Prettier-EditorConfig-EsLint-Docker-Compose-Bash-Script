import { jest, describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import PokemonDetailsScreen from "../../../../screens/pokemon_details_screen/pokemon_details_screen";
import {
  MOCK_POKEMON_NAME,
  POKEMON_ENTITY_OBJECT,
} from "../../../../constants/pokemon_constants";

jest.mock("@remix-run/react", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));

describe("Test Screen PokemonDetailsScreen", () => {
  test("Test If Screens Renders", () => {
    const { getByText } = render(
      <PokemonDetailsScreen pokemonData={POKEMON_ENTITY_OBJECT} />,
    );

    expect(getByText(MOCK_POKEMON_NAME)).toBeTruthy();
  });
});

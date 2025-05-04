import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import PokemonCard from "../../../../components/pokemon_card/pokemon_card";
import {
  MOCK_POKEMON_ID,
  MOCK_POKEMON_NAME,
  MOCK_POKEMON_TYPES,
  POKEMON_ENTITY_OBJECT,
} from "../../../../constants/pokemon_constants";
import {
  ID_DELIMITER_CHARACTER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
} from "../../../../constants/user_interface_constants";

describe("Test Component PokemonCard", () => {
  test("Test If Component Renders", () => {
    const { getByText } = render(
      <PokemonCard pokemonData={POKEMON_ENTITY_OBJECT} />,
    );

    expect(getByText(MOCK_POKEMON_NAME)).toBeTruthy();
    expect(
      getByText(
        ID_DELIMITER_CHARACTER +
          MOCK_POKEMON_ID.toString().padStart(
            POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
            POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
          ),
      ),
    ).toBeTruthy();
    expect(getByText(MOCK_POKEMON_TYPES[0]));
    expect(getByText(MOCK_POKEMON_TYPES[1]));
  });
});

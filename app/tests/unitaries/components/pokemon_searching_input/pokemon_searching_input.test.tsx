import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import PokemonSearchingInput from "../../../../components/pokemon_searching_input/pokemon_searching_input";
import { MOCK_POKEMON_NAME } from "../../../../constants/pokemon_constants";

describe("Test Component PokemonSearchingInput", () => {
  test("Test If Element Dispatches On Change Event", () => {
    let searchedValue = "";

    const { getByRole } = render(
      <PokemonSearchingInput
        value={searchedValue}
        onChange={(updatedSearchingPokemonName) => {
          searchedValue = updatedSearchingPokemonName;
        }}
      />,
    );

    fireEvent.change(getByRole("textbox"), {
      target: { value: MOCK_POKEMON_NAME },
    });

    expect(searchedValue).toEqual(MOCK_POKEMON_NAME);
  });
});

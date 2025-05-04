import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import PokemonLogo from "../../../../components/pokemon_logo/pokemon_logo";

describe("Test Component PokemonLogo", () => {
  test("Test If Component Renders", () => {
    const { container } = render(<PokemonLogo />);

    expect(container.querySelector("svg")).toBeTruthy();
  });
});

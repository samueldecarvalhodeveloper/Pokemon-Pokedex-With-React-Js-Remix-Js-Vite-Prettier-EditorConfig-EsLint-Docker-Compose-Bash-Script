import { ChangeEvent } from "react";
import Styles from "./styles";

function PokemonSearchingInput(props: {
  value: string;
  onChange: (updatedSearchingPokemonName: string) => void;
}) {
  const { value, onChange } = props;

  return (
    <Styles>
      <p className="label">Search</p>
      <input
        data-testid="pokemon_name_searching_input"
        type="text"
        className="input"
        value={value}
        onChange={(event: ChangeEvent) => {
          onChange((event.target as HTMLInputElement).value);
        }}
      />
    </Styles>
  );
}

export default PokemonSearchingInput;

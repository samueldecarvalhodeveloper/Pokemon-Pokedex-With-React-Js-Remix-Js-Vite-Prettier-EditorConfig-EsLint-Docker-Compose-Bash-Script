import {
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
  POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
} from "../../constants/user_interface_constants";
import PokemonEntity from "../../domains/pokemon/infrastructure/entities/pokemon_entity";
import Styles from "./styles";

function PokemonCard(props: { pokemonData: PokemonEntity }) {
  const { pokemonData } = props;

  return (
    <Styles>
      <div
        className={`image ${pokemonData.types[0].toLocaleLowerCase()}_background`}>
        <img src={pokemonData.image} />
      </div>
      <div className="description">
        <h3 className="id">
          #
          {pokemonData.id
            .toString()
            .padStart(
              POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER,
              POKEMON_FROM_FIRST_GENERATION_NUMBER_MAGNITUDE_ORDER_PADDING_CHARACTER,
            )}
        </h3>
        <h2 className="name">{pokemonData.name}</h2>
        <ul className="types">
          {pokemonData.types.map((type, index) => (
            <li
              key={index}
              className={`type ${type.toLocaleLowerCase()}`}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </Styles>
  );
}

export default PokemonCard;

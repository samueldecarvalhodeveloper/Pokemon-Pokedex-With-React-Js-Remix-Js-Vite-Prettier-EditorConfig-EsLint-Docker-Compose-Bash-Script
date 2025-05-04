import PokemonSearchingInput from "../../components/pokemon_searching_input/pokemon_searching_input";
import Banner from "../../components/banner/banner";
import Styles from "./styles";
import { useState } from "react";
import PokemonCard from "../../components/pokemon_card/pokemon_card";
import SmoothScroller from "../../components/smooth_scroller/smooth_scroller";
import Pagination from "../../components/pagination/pagination";
import {
  FIRST_PAGE,
  POKEMON_DETAILS_ROUTE,
} from "../../constants/user_interface_constants";
import PokemonEntity from "../../domains/pokemon/infrastructure/entities/pokemon_entity";
import PokemonSearcher from "../../infrastructure/adapters/pokemon_searcher";
import { Link } from "@remix-run/react";

function PokemonListingScreen(props: {
  matrixOfPokemons: Array<Array<PokemonEntity>>;
}) {
  const { matrixOfPokemons } = props;
  const [searchingPokemonName, setSearchingPokemonName] = useState("");
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);

  return (
    <Styles>
      <Banner />
      <section className="pokemon_listing_section">
        <p className="description">
          Nec bibendum pellentesque massa eget non sem in.
          <br /> Nulla amet id congue cursus lorem
        </p>
        <PokemonSearchingInput
          value={searchingPokemonName}
          onChange={(updatedSearchingPokemonName) => {
            setSearchingPokemonName(updatedSearchingPokemonName);
          }}
        />
        {searchingPokemonName ? (
          <div className="pokemons_listing">
            {PokemonSearcher.getPokemons(
              searchingPokemonName,
              matrixOfPokemons,
            ).map((pokemonData, index) => (
              <div
                key={index}
                className="pokemon_card_container">
                <Link
                  to={`${POKEMON_DETAILS_ROUTE}${pokemonData.id}`}
                  className="pokemon_link">
                  <PokemonCard pokemonData={pokemonData} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="pokemons_listing">
              {matrixOfPokemons[currentPage - 1].map((pokemonData, index) => (
                <div
                  key={index}
                  className="pokemon_card_container">
                  <Link
                    to={`${POKEMON_DETAILS_ROUTE}${pokemonData.id}`}
                    className="pokemon_link">
                    <PokemonCard pokemonData={pokemonData} />
                  </Link>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              numberOfPages={matrixOfPokemons.length}
              onPreviousButtonClick={(updatedCurrentPage: number) => {
                setCurrentPage(updatedCurrentPage);
              }}
              onNextButtonClick={(updatedCurrentPage: number) => {
                setCurrentPage(updatedCurrentPage);
              }}
              onPagePaginationInputChange={(updatedCurrentPage: number) => {
                setCurrentPage(updatedCurrentPage);
              }}
            />
          </>
        )}
      </section>
      <SmoothScroller />
    </Styles>
  );
}

export default PokemonListingScreen;

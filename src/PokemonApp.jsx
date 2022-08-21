import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  
  const { page, pokemons, isLoading } = useSelector( state => state.pokemons );
  const dispatch = useDispatch();

  // Mandar a llamar a la función de getPokemons cuando se cargue el componente
  useEffect(() => {
    dispatch( getPokemons() );
  }, [] );
  

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'True' : 'False' }</span>

      <ul>
        {
          pokemons.map( ({ name }) => (
            <li key={ name }>{ name }</li>
          ))
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons( page ) ) }
      >
        Next
      </button>
    </>
  )
}

import { createSlice } from "@reduxjs/toolkit";

const localStoragePokemon = localStorage.getItem('Data')
let initialState = localStoragePokemon === null ?
    {
        id: 0,
        pokemon: '',
        url: '',
        sprites: {},
        stats: [],
        types: [],
        height: 0,
        weight: 0
    }
    :
    JSON.parse(localStoragePokemon)

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        pokemonSelected: (state, action) => {
            state.id = action.payload.id;
            state.pokemon = action.payload.name;
            state.url = action.payload.url;
            state.sprites = action.payload.sprites;
            state.stats = action.payload.stats;
            state.types = action.payload.types;
            state.height = action.payload.height;
            state.weight = action.payload.weight;
        }
    }
});

export const { pokemonSelected } = pokemonSlice.actions;
export default pokemonSlice.reducer
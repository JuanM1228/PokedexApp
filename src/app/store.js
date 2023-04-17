import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/login/userSlice";
import pokemonReducer from "../features/pokemon/pokemonSlice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        pokemon: pokemonReducer
    }
})

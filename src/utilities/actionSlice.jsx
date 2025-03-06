import {createSlice} from "@reduxjs/toolkit";

export const actionSlice= createSlice(
    {
        name:'moviestore',
        initialState:
            {
                movies:[]
            },
        reducers: {
            detailStore: (state, action) => {
                const detail = { movie: action.payload };
                const movieExists = state.movies.some((movie) => movie.movie.id === action.payload.id);

                if (!movieExists) {
                    state.movies.push(detail);
                }
            },
        },

    }
)
export const {detailStore} =actionSlice.actions
export default actionSlice.reducer;
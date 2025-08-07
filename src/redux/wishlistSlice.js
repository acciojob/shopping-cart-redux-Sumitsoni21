import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: []
}


const wishlistSlice = createSlice({
    name: "wishlist", initialState, reducers: {
        addToWishlist: (state, action) => {
            const item = state.list.find((i) => i.id === action.payload.id);
            if (!item) {
                state.list.push(action.payload);
            }
        },

        removeFromWishlist: (state, action) => {
            const index = state.list.findIndex((i) => i.id === action.payload.id);
            if (index !== -1) {
                state.list.splice(index, 1);
            }
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
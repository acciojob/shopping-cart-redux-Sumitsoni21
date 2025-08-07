const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    code: '',
    discount: 0,
}

const couponSlice = createSlice({
    name: "coupon", initialState, reducers: {
        applyCoupon: (state, action) => {
            if (action.payload == 'DISCOUNT10') {
                state.code = action.payload;
                state.discount = 10;
            }
        },

        clearCoupon: (state) => {
            state.code = '';
            state.discount = 0;
        }

    }
});


export const { applyCoupon, clearCoupon } = couponSlice.actions;

export default couponSlice.reducer
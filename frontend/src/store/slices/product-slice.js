import { createSlice } from '@reduxjs/toolkit'

const productCountFromStorage = localStorage.getItem('productCount') ?
    JSON.parse(localStorage.getItem('productCount')) : null

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        productCount: productCountFromStorage
    },
    reducers: {
        setProducts(state, action) {   
            state.products = action.payload;  
            
        },
        setProductCount(state, action) {
            localStorage.setItem('productCount', action.payload);
        }
    },
});

export const { setProducts, setProductCount } = productSlice.actions;
export default productSlice.reducer;

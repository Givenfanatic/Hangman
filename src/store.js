import { configureStore } from "@reduxjs/toolkit"
import wordReducer from "./Slicers/WordSlice"

export default configureStore({
    reducer: {
        word: wordReducer
    }
})
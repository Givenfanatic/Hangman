// import createSlice function from the redux toolkit library and the word list array
import { createSlice } from "@reduxjs/toolkit";
import wordList from '../wordLists';

// define a new slice of state named "word" using createSlice function
export const wordSlice = createSlice({
    name: 'word',
    // define the initial state of the slice
    initialState: {
        'newWord': '', // the random word to be guessed by the user
        'count': 0, // number of incorrect guesses by the user
        'result': '', // the result of the game (win or lose)
    },
    // define a set of reducers to update the state of the slice
    reducers: {
        // a reducer to get a new random word from the word list
        getNewWord: (state) => {
            let newWord = wordList[Math.floor(Math.random() * wordList.length)]; // get a random word from the word list
            newWord = newWord.trim().toUpperCase() // convert the word to uppercase and trim any whitespace
            state.newWord = newWord // update the newWord state with the random word
        },
        // a reducer to increase the count of incorrect guesses by 1
        increaseCount: (state) => {
            state.count += 1 // increment the count state by 1
        },
        // a reducer to initialise the count of incorrect guesses to 0
        initialiseCount: (state) => {
            state.count = 0 // set the count state to 0
        },
        // a reducer to set the result of the game based on the number of incorrect guesses
        setResult: (state, action) => {
            switch (action.payload) {
                case 0: // if the user has used up all their guesses, set the result to lose with the correct word
                    state.result = `You Lose!! The correct word is ${state.newWord}`
                    break;
                case 1: // if the user has guessed the correct word, set the result to win
                    state.result = 'You Win!!'
                    break;
                default: // otherwise, set the result to an empty string
                    state.result = ''
                    break;
            }
        },
    },
})

// export the reducers as named exports for use in other components
export const { getNewWord, increaseCount, initialiseCount, setResult } = wordSlice.actions

// export the wordSlice reducer as the default export
export default wordSlice.reducer

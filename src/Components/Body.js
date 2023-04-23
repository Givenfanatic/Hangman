// Import necessary modules
import { useSelector, useDispatch } from "react-redux";
import { getNewWord, increaseCount, initialiseCount, setResult } from "../Slicers/WordSlice";
import { useState } from 'react';
import Alphabet from "./Alphabet";
import CurrentImage from "./CurrentImage";
import Results from './Results'

// Define a React functional component called Body
const Body = () => {

    // Retrieve the newWord value from the Redux store
    const word = useSelector((state) => state.word.newWord);
    // Define state to keep track of the correctly guessed letters
    const [correctAns, setCorrectAns] = useState([])
    // Retrieve the dispatch function from the Redux store
    const dispatch = useDispatch();

    console.log("word", word);

    // Define a function to start the game
    const startGame = () => {
        // Dispatch actions to reset the game state
        dispatch(initialiseCount())
        dispatch(getNewWord())
        setCorrectAns([])
        dispatch(setResult(''))

        // Enable all alphabet buttons and reset their styles
        const btnArr = document.getElementsByName('icon-button')
        Array.from(btnArr).forEach((btn) => {
            btn.disabled = false
            btn.className = 'button'
        })
    }

    // Define a function to evaluate the user's guess
    const evaluateResponse = (alphabet) => {
        let btn = document.getElementById(alphabet)
        // If the guess is correct, update the correctAns state and change the button style to green
        if (word.includes(alphabet)) {
            btn.className = "button-green"
            setCorrectAns([...correctAns, alphabet])    
        }
        // If the guess is incorrect, increment the count of incorrect guesses and change the button style to red
        else {
            btn.className = "button-red"
            dispatch(increaseCount())
        }
    }

    // Define a function to disable all alphabet buttons
    const disableButtons = () => {
        const btnArr = document.getElementsByName('icon-button')
        Array.from(btnArr).forEach((btn) => {
            btn.disabled = true
            btn.className = 'button-grey'
        })
    }

    // Create an array of all alphabets
    let alphabets = []
    for (let i = 65; i < 91; i++) {
        let char = String.fromCharCode(i)
        alphabets.push(char)
    }

    // Create a string with the correctly guessed letters and underscores for the remaining letters
    const guessWord = word.split('').map(char => correctAns.includes(char) ? char : '_').join(" ")

    // If the user has correctly guessed the word, update the game state and disable all alphabet buttons
    if ((!(guessWord.includes("_"))) && (word !== '')) {
        dispatch(setResult(1))
        disableButtons()
    }

    // Render the game elements
    return <div >
        {word && <Results />}
        {word && <div className='state-container'>
            <CurrentImage disableButtons={disableButtons} />
            <p className='state-dash'>{guessWord}</p>
        </div>}
        <button className='btn' onClick={startGame}>Start Game</button>
        {word && <div className='alpha-container'>
            {alphabets.map((alphabet, index) =>
                <Alphabet key={index} alphabet={alphabet} evaluateResponse={evaluateResponse} />
            )}
        </div>}
    </div>;
};

// Export the Body component as the default export of this module
export default Body;

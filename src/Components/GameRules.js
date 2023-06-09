// Define a functional component called Rules.
const Rules = () => {
    // Render a div element containing a title and a list of rules.
    return <div>
        <h4>How to Play:</h4>
        <div className="rules">
            <ol>
                <li>Click 'Start Game'.</li>
                <li>You have 10 chances to guess the right word.</li>
                <li>Number of blank spaces represent number of letters in the secret word.</li>
                <li>Start guessing the word by clicking on a letter.</li>
                <li>If your guess is correct, the letter is revealed.</li>
                <li>If your guess is incorrect, you lose a chance.</li>
                <li>You win when you get every letter of the word before hangman drawing finishes.</li>
                <li>You lose if you guess 10 incorrect letters.</li>
                <li>Click 'I Know Rules' to hide this section.</li>
            </ol>
        </div>
    </div>;
};

// Export the Rules component as the default export of this module.
export default Rules;

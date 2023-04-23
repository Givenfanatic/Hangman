// Define a React functional component called Alphabet
const Alphabet = ({ alphabet, evaluateResponse }) => {

    // The component returns a div with a button
    return <div>
        <div className='icon'>
            {/* The button displays the value of the alphabet prop */}
            {/* When the button is clicked, the evaluateResponse function is called with the value of the alphabet prop as an argument */}
            <button className="button" id={alphabet} name='icon-button' onClick={() => evaluateResponse(alphabet)}>{alphabet}</button>
        </div>
    </div>;
};

// Export the Alphabet component as the default export of this module
export default Alphabet;

// This import statement allows us to use the 'useSelector' hook provided by the 'react-redux' library.
import { useSelector, } from "react-redux";

const Results = () => {
    // This line of code uses the 'useSelector' hook to get the value of the 'result' key from the 'word' slice of the global state.
    const result = useSelector((state) => state.word.result);

    return <div className="results">
        <p>Result: {result}</p>
    </div>;
};

// This line of code exports the Results component so that it can be imported and used in other files.
export default Results;
import { useSelector, useDispatch } from "react-redux";
import { setResult } from "../Slicers/WordSlice";

import state1 from '../Images/state1.GIF'
import state2 from '../Images/state2.GIF'
import state3 from '../Images/state3.GIF'
import state4 from '../Images/state4.GIF'
import state5 from '../Images/state5.GIF'
import state6 from '../Images/state6.GIF'
import state7 from '../Images/state7.GIF'
import state8 from '../Images/state8.GIF'
import state9 from '../Images/state9.GIF'
import state10 from '../Images/state10.gif'
import state11 from '../Images/state11.GIF'

const CurrentImage = ({ disableButtons }) => {

    // Get the current count of incorrect guesses from the redux store
    const count = useSelector((state) => state.word.count)

    // Get the dispatch function from the redux store
    const dispatch = useDispatch()

    // Get the current image element using its id
    let img = document.getElementById('state-img')

    // Change the current image source based on the current count of incorrect guesses
    if (img) {
        switch (count) {
            case 0:
                img.src = state1
                break;
            case 1:
                img.src = state2
                break;
            case 2:
                img.src = state3
                break;
            case 3:
                img.src = state4
                break;
            case 4:
                img.src = state5
                break;
            case 5:
                img.src = state6
                break;
            case 6:
                img.src = state7
                break;
            case 7:
                img.src = state8
                break;
            case 8:
                img.src = state9
                break;
            case 9:
                img.src = state10
                break;
            case 10:
                img.src = state11
                dispatch(setResult(0))
                disableButtons()
                break;
            default:
                img.src = state1
                break;
        }
    }

    // Render the image element with the initial state image
    return <div>
        <img className='state-img' id='state-img' src={state1} alt='state' />
    </div>;
};

export default CurrentImage;

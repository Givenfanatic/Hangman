import { useState } from "react";
import Rules from "../Components/GameRules";

const Header = () => {
    // using useState hook to store a flag to show/hide rules
    const [showRules, setShowRules] = useState(true)

    // toggle the value of showRules when the button is clicked
    const displayRules = () => {
        setShowRules(!showRules)
    }

    return <div>
        <header className="header">
            <h1>Hangman</h1>
            <button className="btn" onClick={displayRules}>{showRules ? 'Hide Rules' : 'Help'}</button>
        </header>
        {/* display rules only when showRules is true*/}
        {showRules && <Rules />} 
    </div>

};

export default Header;

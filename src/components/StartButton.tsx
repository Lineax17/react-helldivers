import React from "react";

function startButton() {
    return <div>
        <button className={"start_button"} onClick={() => console.log("StartButton clicked")}>Start</button>
    </div>
}

export default startButton;
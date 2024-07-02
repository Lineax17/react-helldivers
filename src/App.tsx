import StratagemImage from './components/StratagemImage'
import StartButton from "./components/StartButton";
import StratagemList from "./components/StratagemList";
import StratagemJson from "../stratagems.json"

function App() {
    return <div>

        <StratagemList subsectionList = {StratagemJson.subsections}></StratagemList>
    </div>
}

/*
    <StratagemImage imagePath="../../media/stratagems/hangar/Eagle Airstrike.svg"></StratagemImage>
 */

export default App

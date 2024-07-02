import StratagemImage from './components/StratagemImage'
import StartButton from "./components/StartButton";
import StratagemList from "./components/StratagemList";
import StratagemJson from "../stratagems.json"
import StratagemTrainingPage from "./components/StratagemTrainingPage";

function App() {
    return <div>
        <StratagemTrainingPage sectionName='General_Stratagems' stratagemName ='Dark_Fluid_Vessel'></StratagemTrainingPage>
        <StratagemList subsectionList = {StratagemJson.subsections}></StratagemList>
    </div>
}

/*

    <StratagemImage imagePath="../../media/stratagems/hangar/Eagle Airstrike.svg"></StratagemImage>
 */

export default App

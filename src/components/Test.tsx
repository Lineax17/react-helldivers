import StratagemImage from "./StratagemImage";
import StratagemList from "./StratagemList";
import StratagemSublist from "./StratagemSublist";

function Test () {

    const sectionName = "hangar"
    const filePath= ""

    return <div>
        <StratagemImage imagePath="../../media/stratagems/hangar/Eagle Airstrike.svg"></StratagemImage>
        <StratagemList></StratagemList>
        <StratagemSublist sectionName={sectionName} filePath={filePath}></StratagemSublist>
    </div>
}

export default Test
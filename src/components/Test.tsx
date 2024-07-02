import StratagemImage from "./StratagemImage";
import StratagemList from "./StratagemList";
import StratagemSublist from "./StratagemSublist";

function Test () {

    //replace these with content of json
    const sectionName = "hangar"
    const filePath= ""
    const imagePath = "../../media/stratagems/hangar/Eagle Airstrike.svg"

    return <div>
        <StratagemImage imagePath={imagePath}></StratagemImage>
        <StratagemList></StratagemList>
        <StratagemSublist sectionName={sectionName} filePath={filePath}></StratagemSublist>
    </div>
}

export default Test
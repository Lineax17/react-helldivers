import React from "react";
import StratagemImage from "./StratagemImage";

interface StratagemSublistProps{
    sectionName: string
}

function StratagemSublist(stratagemSublistProps:StratagemSublistProps) {
    return <div>
        <h2>{stratagemSublistProps.sectionName}</h2>
        <StratagemImage imagePath="../../media/stratagems/bridge/HMG_Emplacement.svg"></StratagemImage>
    </div>
}

export default StratagemSublist;
import React from "react";
import StratagemImage from "./StratagemImage";
import stratagemImage from "./StratagemImage";
import {Simulate} from "react-dom/test-utils";
import compositionEnd = Simulate.compositionEnd;

interface StratagemSublistProps{
    sectionName: string
}

interface StratagemImage{
    filePath:string
}

const Components = {
    stratagemImage:StratagemImage
};


const dynamicComponent = (imagePath:string) => {
    return React.createElement(StratagemImage, {imagePath});

};
/*
{dynamicComponent({filePath:'../../media/stratagems/bridge/HMG_Emplacement.svg'})}
Components[stratagemImage.filePath], { key: stratagemImage._uid, block: stratagemImage }
 */

function StratagemSublist(stratagemSublistProps:StratagemSublistProps) {
    return <div>
        <h2>{stratagemSublistProps.sectionName}</h2>
        <StratagemImage imagePath="../../media/stratagems/bridge/HMG_Emplacement.svg"></StratagemImage>
        {dynamicComponent('../../media/stratagems/bridge/HMG_Emplacement.svg')}
    </div>
}

/*
<img src={"../../media/stratagems/bridge/HMG_Emplacement.svg"} alt="Stratagem Image"/>
 */

export default StratagemSublist;
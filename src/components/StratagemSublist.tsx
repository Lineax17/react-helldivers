import React from "react";
import StratagemImage from "./StratagemImage";
import stratagemImage from "./StratagemImage";
import {Simulate} from "react-dom/test-utils";
import compositionEnd = Simulate.compositionEnd;
import StratagemJson from "../../stratagems.json";

interface StratagemSublistProps{
    sectionName: string
    //stratagemList: typeof StratagemJson.subsections
    //stratagemList: typeof StratagemJson.subsections.
    //subsectionElement:typeof StratagemJson.subsections;
}

interface StratagemImage{
    filePath:string
}

const createImages = (sectionName : string) => {
    const stratagems = StratagemJson.subsections.find((element) => element.ship_compartment === sectionName).stratagems

    const sublist = stratagems.map(item =>
        <StratagemImage imagePath={item.image_path} stratagemName={item.name} sectionName={sectionName}></StratagemImage>)
    return sublist
};

const Components = {
    stratagemImage:StratagemImage
};
/*
//Function to create one Stratagem Image
const dynamicComponent = (imagePath:string) => {
    return React.createElement(StratagemImage, {imagePath});
};
const createImages = (stratagemList: typeof StratagemJson.subsections.stratagems) => {
    return stratagemList.map(item =><StratagemImage imagePath="../../media/stratagems/bridge/HMG_Emplacement.svg"></StratagemImage>)
};
 */


function StratagemSublist(stratagemSublistProps:StratagemSublistProps) {
    return <div>
        <h2>{stratagemSublistProps.sectionName}</h2>
        {createImages(stratagemSublistProps.sectionName)}
    </div>
}

/*
<img src={"../../media/stratagems/bridge/HMG_Emplacement.svg"} alt="Stratagem Image"/>
<StratagemImage imagePath="../../media/stratagems/bridge/HMG_Emplacement.svg"></StratagemImage>
       {dynamicComponent('../../media/stratagems/bridge/HMG_Emplacement.svg')}
 */

export default StratagemSublist;
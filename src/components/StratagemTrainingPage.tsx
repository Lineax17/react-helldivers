import StratagemImage from './StratagemImage'
import StartButton from "./StartButton";
import React from "react";

import StratagemJson from "../../stratagems.json"


interface StratagemPageProps {
    sectionName:string
    stratagemName:string
}



function StratagemTainingPage(props:StratagemPageProps){
    const stratagemRef = StratagemJson.subsections.find(element => element.ship_compartment === props.sectionName).stratagems.find(element => element.name === props.stratagemName)
    const filePath = stratagemRef.image_path
    const arrows = stratagemRef.keys

    return (<div>
        <div>{props.stratagemName}</div>
        <StratagemImage imagePath={filePath} sectionName={props.sectionName} stratagemName={props.stratagemName}></StratagemImage>
        <div>{getArrows(arrows)}</div>
        <br/><br/><br/>
        <StartButton></StartButton>
    </div>)
}

function getArrows(arrows:string[]){
    const arrowElements = arrows.map(item => <a>{keyToArrow(item)}</a>)

    return arrowElements
}

function keyToArrow(key:string){
    switch (key){
        case "w": return <img src="../../media/arrows/Up_Unpressed.webp" alt="Up_Unpressed"/>
        case "a": return <img src="../../media/arrows/Left_Unpressed.webp" alt="Left_Unpressed"/>
        case "s": return <img src="../../media/arrows/Down_Unpressed.webp" alt="Down_Unpressed"/>
        case "d": return <img src="../../media/arrows/Right_Unpressed.webp" alt="Right_Unpressed"/>
        default: return <img src="" alt="Error"/>
    }
}

export default StratagemTainingPage

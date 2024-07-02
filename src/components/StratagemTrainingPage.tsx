import StratagemImage from './StratagemImage'
import StartButton from "./StartButton";
import React from "react";

interface StratagemPageProps {
    imagePath: string;
}

const StratagemTrainingPage: React.FC<StratagemPageProps> = ({ imagePath }) => {
    return <div>
        <StratagemImage imagePath={imagePath}/>
        <br/><br/><br/>
        <StartButton></StartButton>
    </div>
}

export default StratagemTrainingPage

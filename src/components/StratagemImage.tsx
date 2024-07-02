import React from "react";
import StratagemTrainingPage from "./StratagemTrainingPage";
import StratagemSublist from "./StratagemSublist";

interface StratagemImageProps {
  imagePath: string;
}

function StratagemImage(stratagemImageProps:StratagemImageProps) {
  return <div className="stratagem_image" onClick={() => console.log("Onclick Image Test")} ><img src={stratagemImageProps.imagePath} alt="Stratagem Image" /></div>;
}
/*
const StratagemImage: React.FC<StratagemImageProps> = ({ imagePath }) => {
  return <div className="stratagem_image" onClick={() =>"Onclick Image Test"}><img src={imagePath} alt="Stratagem Image" /></div>;
};

*/

export default StratagemImage;

import React from "react";
import StratagemPage from "./StratagemPage";

interface StratagemImageProps {
  imagePath: string;
}

const StratagemImage: React.FC<StratagemImageProps> = ({ imagePath }) => {
  return <div className="stratagem_image" onClick={() =>"Onclick Image Test"}><img src={imagePath} alt="Stratagem Image" /></div>;
};

export default StratagemImage;

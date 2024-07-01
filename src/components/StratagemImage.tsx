import React from "react";

interface StratagemImageProps {
  imagePath: string;
}

const StratagemImage: React.FC<StratagemImageProps> = ({ imagePath }) => {
  return <div className="stratagem_image" onClick={() => console.log("Clicked. Placeholder for function")}><img src={imagePath} alt="Stratagem Image" /></div>;
};

export default StratagemImage;

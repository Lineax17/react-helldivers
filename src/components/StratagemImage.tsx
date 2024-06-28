import React from "react";

interface StratagemImageProps {
  imagePath: string;
}

const StratagemImage: React.FC<StratagemImageProps> = ({ imagePath }) => {
  return <div id="stratagem_image"><img src={imagePath} alt="Stratagem Image" /></div>;
};

export default StratagemImage;

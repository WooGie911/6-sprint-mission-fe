import React, { useState } from "react";
import defaultImage from "../../../assets/images/icons/img_default.svg";

const SafeImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  alt,
  ...props
}) => {
  const [src, setSrc] = useState(props.src ?? defaultImage);
  const handleError = () => setSrc(defaultImage);
  return <img {...props} src={src} onError={handleError} alt={alt || ""} />;
};

export default SafeImage;

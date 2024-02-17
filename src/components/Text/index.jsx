import React from "react";

const sizeClasses = {
  txtEncodeSansMedium205: "font-encodesans font-medium",
  txtCommeExtraLight20: "font-comme font-normal",
  txtEncodeSansBold1879: "font-bold font-encodesans",
  txtEncodeSansRegular1196: "font-encodesans font-normal",
  txtRalewayRegular1196: "font-normal font-raleway",
  txtEncodeSansRegular14: "font-encodesans font-normal",
  txtEncodeSansMedium16: "font-encodesans font-medium",
  txtEncodeSansRegular13: "font-encodesans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

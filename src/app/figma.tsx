import React from "react";

type FigmaProps = {
  className?: string;
};

export default function Figma({ className }: FigmaProps) {
  return (
    <div className={`${className}`}>
      <div className="top flex justify-start items-center">
        <div className="top-left aspect-square basis-1/2 rounded-l-full bg-figmaTopLeft"></div>
        <div className="top-right aspect-square basis-1/2 rounded-r-full bg-figmaTopRight"></div>
      </div>
      <div className="mid flex justify-start items-center">
        <div className="mid-left aspect-square basis-1/2 rounded-l-full bg-figmaMidLeft"></div>
        <div className="mid-right aspect-square basis-1/2 rounded-full bg-figmaMidRight"></div>
      </div>
      <div className="bottom flex justify-start items-center">
        <div className="bottom-left aspect-square basis-1/2 rounded-l-full rounded-b-full bg-figmaBottomLeft"></div>
      </div>
    </div>
  );
}

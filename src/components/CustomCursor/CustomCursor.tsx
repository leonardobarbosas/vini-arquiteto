"use client";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{ backgroundColor: "#F0EDE6" }}
      outerStyle={{ border: "3px solid #F0EDE6" }}
    />
  );
}

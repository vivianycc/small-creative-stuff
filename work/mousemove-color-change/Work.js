import React, { useRef } from "react";

export default function Work() {
  const color = useRef(null);
  const container = useRef(null);

  //   console.log(container.clientWidth, container.clientHeight);

  function change(e) {
    // console.log("e", e.clientX, e.clientY);
    // console.log("container", container.current);
    let horizontal = Math.round(
      (e.clientX / container.current.clientWidth) * 255
    );
    let vertical = Math.round(
      (e.clientY / container.current.clientHeight) * 255
    );
    let color1 = `hsl(${horizontal},100%,30%)`;
    let color2 = `hsl(${vertical},100%,30%)`;
    let [x, y] = resetCoordinates(e.clientX, e.clientY);
    // console.log(x, y);
    let angle = calcAngleDegrees(x, y);

    let gradient = `linear-gradient(${angle}deg,${color2},${color1})`;
    color.current.style.background = gradient;

    console.log(resetCoordinates(e.clientX, e.clientY), angle);
  }
  function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
  }

  function resetCoordinates(x, y) {
    let centerX = container.current.clientWidth / 2;
    let centerY = container.current.clientHeight / 2;
    let newX = x - centerX;
    let newY = centerY - y;
    return [newX, newY];
  }

  return (
    <div
      className="container"
      ref={container}
      onMouseMove={(e) => change(e)}
      style={{
        width: "500px",
        minHeight: "500px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="color"
        ref={color}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "100%",
          background: "linear-gradient(45deg, blue, red)",
        }}
      ></div>
    </div>
  );
}

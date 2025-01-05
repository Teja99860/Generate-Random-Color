import React, { useEffect, useState } from "react";

const GenerateColor = () => {
  const [color, setColor] = useState("#000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomNumberGeneraterOfColor = (lenght) => {
    return Math.floor(Math.random() * lenght);
  };

  const handleGenerateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumberGeneraterOfColor(hex.length)];
    }

    setColor(hexColor);
  };

  const handleGenerateRandomRgbColor = () => {
    const r = randomNumberGeneraterOfColor(255);
    const g = randomNumberGeneraterOfColor(255);
    const b = randomNumberGeneraterOfColor(255);

    setColor(`rgb(${r}, ${g},${b})`);
  };

  useEffect(() => {
    typeOfColor === "hex"
      ? handleGenerateRandomHexColor()
      : handleGenerateRandomRgbColor();
  }, [typeOfColor]);

  return (
    <div style={{ backgroundColor: color }} className="min-h-screen">
      <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
        <div className="flex-row">
          <button
            className="px-4 py-2 border rounded-md bg-black text-white cursor-pointer"
            onClick={() => setTypeOfColor("hex")}
          >
            Generate hex color
          </button>
          <button
            className="px-4 py-2 border rounded-md bg-black text-white cursor-pointer"
            onClick={() => setTypeOfColor("rgb")}
          >
            Generate rgb color
          </button>
          <button
            className="px-4 py-2 border rounded-md bg-black text-white cursor-pointer"
            onClick={
              typeOfColor === "hex"
                ? handleGenerateRandomHexColor
                : handleGenerateRandomRgbColor
            }
          >
            Generate random color
          </button>
        </div>
        <div className="flex flex-col text-4xl text-white font-semibold items-center gap-10">
          <p>{typeOfColor === "hex" ? "HEX" : "RGB"}</p>
          <p>{color}</p>
        </div>
      </div>
    </div>
  );
};

export default GenerateColor;

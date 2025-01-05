import React, { useEffect, useState } from "react";

const ButtonComponent = ({ buttonLabel, handleClick }) => {
  return (
    <button
      className="border rounded-md px-4 py-2 text-white text-lg font-semibold bg-black"
      onClick={handleClick}
    >
      {buttonLabel}
    </button>
  );
};

const GenerateColor = () => {
  const [color, setColor] = useState("#000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomNumberForColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHexColorGenerater = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumberForColor(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRandomRgbColorGenerater = () => {
    const r = randomNumberForColor(255);
    const g = randomNumberForColor(255);
    const b = randomNumberForColor(255);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    typeOfColor === "hex"
      ? handleRandomHexColorGenerater()
      : handleRandomRgbColorGenerater();
  }, [typeOfColor]);

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
        <div className="flex gap-10 ">
          <ButtonComponent
            buttonLabel="Generate hex color"
            handleClick={() => setTypeOfColor("hex")}
          />
          <ButtonComponent
            buttonLabel="Generate rgb color"
            handleClick={() => setTypeOfColor("rgb")}
          />
          <ButtonComponent
            buttonLabel="Generate random color"
            handleClick={
              typeOfColor === "hex"
                ? handleRandomHexColorGenerater
                : handleRandomRgbColorGenerater
            }
          />
        </div>
        <div className="flex flex-col text-white text-2xl gap-10 font-bold items-center bg-black p-4 rounded-md">
          <p>{typeOfColor === "hex" ? "HEX" : "RGB"}</p>
          <p>{color}</p>
        </div>
      </div>
    </div>
  );
};

export default GenerateColor;

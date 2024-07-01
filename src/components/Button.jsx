import React from "react";

const Buttton = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Buttton;

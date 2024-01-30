import React, { useState } from "react";
import "./Range.css";

const Range = () => {
  const [rangeValue, setRangeValue] = useState(80);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="scale">
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
      />

      <p>{rangeValue}%</p>
    </div>
  );
};

export default Range;

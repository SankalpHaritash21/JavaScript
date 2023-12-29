import { useState } from "react";

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <div>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activeColor}
        className="border-2 border-black"
      />
    </div>
  );
};

export default Callback;

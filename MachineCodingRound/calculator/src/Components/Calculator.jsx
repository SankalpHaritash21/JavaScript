import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  function handleClick(e) {
    setValue(value + e.target.value);
  }

  function handleOutput(e) {
    setValue(eval(value));
  }

  return (
    <div>
      <form
        action=""
        className="border border-black w-96 h-96 p-5 rounded-xl gap-y-10"
      >
        <div>
          <input
            type="text"
            className="border border-black w-full bg-gray-700 text-white"
            value={value}
          />
        </div>

        <div className="flex items-center justify-center gap-y-10">
          <div>
            <input
              type="button"
              value="Ac"
              className="button"
              onClick={(e) => setValue("")}
            />
            <input
              type="button"
              value="DE"
              className="button"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="/"
              className="button"
              onClick={handleClick}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="8"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="9"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="*"
              className="button"
              onClick={handleClick}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="5"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="6"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="+"
              className="button"
              onClick={handleClick}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="2"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="3"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="-"
              className="button"
              onClick={handleClick}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="0"
              className="button"
              onClick={handleClick}
            />
            <input
              type="button"
              value="="
              className="button"
              onClick={handleOutput}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;

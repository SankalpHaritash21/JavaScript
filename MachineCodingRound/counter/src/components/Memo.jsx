import { useMemo, useState } from "react";
import Prime from "./helper/Prime";

function App() {
  const [text, setText] = useState(0);
  const [dark, setDark] = useState(true);

  // Heavy Operation
  // const prime= Prime(text)

  const prime = useMemo(() => Prime(text), [text]);

  return (
    <div
      className={
        "flex flex-col items-center justify-center w-full min-h-screen"
      }
    >
      <div
        className={
          !dark
            ? "w-96 h-96 border-2 border-black flex flex-col justify-center items-center"
            : "bg-black text-white w-96 h-96 border-2 border-black flex  flex-col justify-center items-center"
        }
      >
        <div>
          <input
            type="number"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-black h-12 mt-3 text-black p-2"
          />
        </div>
        <div>
          <h1>nth Prime:{prime}</h1>
        </div>
      </div>
      <button
        onClick={() => setDark(!dark)}
        className="border border-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-4 px-10 py-4 rounded-xl text-xl"
      >
        Change
      </button>
    </div>
  );
}

export default App;

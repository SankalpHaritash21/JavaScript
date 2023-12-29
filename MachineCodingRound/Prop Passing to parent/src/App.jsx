import { useState } from "react";
import Callback from "./callback/callback";

//Parent Component
function App() {
  const [uicolor, setUIColor] = useState(null);

  //Callback Function
  const getColor = (color) => {
    console.log("Received color:", color);
    setUIColor(color);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div
        className={`flex items-center justify-center h-[500px] w-[500px] border-2 border-black rounded-xl mb-4`}
        style={{ background: `${uicolor}` }}
      >
        hi
      </div>
      <Callback getColor={getColor} />
    </div>
  );
}

export default App;

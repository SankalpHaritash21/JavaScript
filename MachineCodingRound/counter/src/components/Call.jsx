import { useEffect, useRef, useState } from "react";

const Call = () => {
  const [Y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  let i;
  useEffect(() => {
    //   i = setInterval(() => console.log("Sankalp"), 1000);
  });
  /*net like ref=0

  It seems like
  ref= {current: 0}
  */

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">
      {/*State Variable */}
      <div className="text-4xl flex gap-x-10 items-center justify-center">
        <h1>State: {Y}</h1>
        <button
          onClick={() => {
            //x=x+1
            setY(Y + 1);
            {
              /* setY(Y + 1);
          setY(Y + 1);
          setY(Y + 1);
          setY(Y + 1);
          */
            }
          }}
          className="border border-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-4 px-10 py-4 rounded-xl text-xl"
        >
          Increase State
        </button>
      </div>

      {/*Let Variable */}
      <div className="text-4xl flex gap-x-10  items-center justify-center">
        <h1>Let: {x}</h1>
        <button
          onClick={() => {
            x = x + 1;
            // x value  start from 0 each time because when page rerender on change of state variable new execution context is created and all variable are new ie x get reset
            console.log("x=", x);
          }}
          className="border border-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-4 px-10 py-4 rounded-xl text-xl"
        >
          Increase let
        </button>
      </div>

      {/*Ref Variable */}
      <div className="text-4xl flex gap-x-10  items-center justify-center">
        <h1>Ref: {ref.current}</h1>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            //ref is not rerendering

            console.log(ref.current);
          }}
          className="border border-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-4 px-10 py-4 rounded-xl text-xl"
        >
          Increase Ref
        </button>
      </div>

      <button
        onClick={() => {
          clearInterval(i);
        }}
        className="border border-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-4 px-10 py-4 rounded-xl text-xl"
      >
        Stop
      </button>
    </div>
  );
};

export default Call;

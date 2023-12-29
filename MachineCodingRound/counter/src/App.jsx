import Call from "./components/Call";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col m-10 items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
      <span className="bg-gradient-to-r from-black via-white to-gray-600 text-transparent bg-clip-text text-4xl underline">
        Some Basics of React useMemo, useCallback, useRef
      </span>

      <Call />
    </div>
  );
};

export default App;

import { create } from "zustand";
import "./App.css";

const useStore = create((set) => ({
  items: ["Apple", "Mango", "Banana", "Grapes", "Orange"],
  shuffleItems: () =>
    set((state) => ({
      items: state.items.sort(() => Math.random() - 0.5), // Shuffle items array
    })),
}));

function App() {
  const { items, shuffleItems } = useStore();
  // const [item, setItem] = useState([
  //   "Apple",
  //   "mango",
  //   "banana",
  //   "Graps",
  //   "orange",
  // ]);

  // const hadleShuffel = () => {
  //   const x = [...item];
  //   for (let i = x.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));

  //     [x[i], x[j]] = [x[j], x[i]];
  //   }
  //   setItem(x);
  // };

  return (
    <div>
      <div>
        <ul>
          {items.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
      <button onClick={shuffleItems}>Shuffel</button>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Count from "./count/Count";
import Stats from "./count/Stats";

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];
function App() {
  const [counts, setCounts] = useState(initialState);

  const updateCount = (id: number, value: number) => {
    setCounts((prev) =>
      prev.map((val) =>
        val.id === id ? { ...val, count: val.count + value } : val
      )
    );
  };
  const total = counts.reduce((acc,curr)=> acc+curr.count,0)

  return (
    <>
      {counts.map((count) => (
        <Count
          key={count.id}
          count={count.count}
          handleIncrement={() => updateCount(count.id, 1)}
          handleDecrement={() => updateCount(count.id, -1)}
        ></Count>
      ))}
      <Stats value={total}></Stats>
    </>
  );
}

export default App;

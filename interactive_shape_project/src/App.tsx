import { useState } from "react";
import "./App.css";

const BOX = Array.from({ length: 3 }).map(() =>
  Array.from({ length: 3 }).map(() => 0)
);
function App() {
  const [clickPoints, setClickPoints] = useState<Array<Array<number>>>(BOX);
  // const [clickOrders, setClickOrders] = useState();

  const handleClick = (point: Array<number>) => {};

  console.log("clicked points::", clickPoints);
  return (
    <div className="box_container">
      {BOX.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <button
            className={`box ${clickPoints[rowIndex][colIndex] && "active"}`}
            onClick={() => handleClick([rowIndex, colIndex])}
          />
        ))
      )}
    </div>
  );
}

export default App;

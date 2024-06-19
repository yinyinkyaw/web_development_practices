import { useState } from "react";
import "./App.css";

const BOX = Array.from({ length: 3 }).map(() =>
  Array.from({ length: 3 }).map(() => 0)
);
function App() {
  const [clickPoints, setClickPoints] = useState<Array<Array<number>>>(BOX);
  // const [clickOrders, setClickOrders] = useState();

  const handleClick = (point: Array<number>) => {
    const modifyClickPoints = clickPoints?.map((row, rowId) =>
      rowId === point[0]
        ? row.map((col, colIndex) => (colIndex === point[1] ? 1 : col))
        : row
    );

    setClickPoints(modifyClickPoints);
  };

  return (
    <div className="box_container">
      {BOX.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <button
            disabled={!!clickPoints[rowIndex][colIndex]}
            className={`box ${clickPoints[rowIndex][colIndex] && "active"}`}
            onClick={() => handleClick([rowIndex, colIndex])}
          >
            {rowIndex} x {colIndex}
          </button>
        ))
      )}
    </div>
  );
}

export default App;

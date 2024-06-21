import { useState } from "react";
import "./App.css";

const BOX = Array.from({ length: 3 }).map(() =>
  Array.from({ length: 3 }).map(() => 0)
);
function App() {
  const [newBox, setNewBox] = useState<Array<Array<number>>>(BOX);
  const [clickOrders, setClickOrders] = useState<Array<Array<number>>>([]);

  const handleClick = (rowIndex: number, colIndex: number) => {
    const modifyClickPoints = newBox?.map((row, rowId) =>
      rowId === rowIndex
        ? row.map((col, colId) => (colId === colIndex ? 1 : col))
        : row
    );

    setClickOrders([...clickOrders, [rowIndex, colIndex]]);
    setNewBox(modifyClickPoints);
  };

  return (
    <div className="box_container">
      {BOX.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <button
            disabled={!!newBox[rowIndex][colIndex]}
            className={`box ${newBox[rowIndex][colIndex] && "active"}`}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            {rowIndex} x {colIndex}
          </button>
        ))
      )}
    </div>
  );
}

export default App;

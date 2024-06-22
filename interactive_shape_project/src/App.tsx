import { useEffect, useState } from "react";
import "./App.css";
import { changeBoxStatus, getNestedArrSize } from "./utils";

const BOX = Array(3).fill(Array(3).fill(0));

export default function App() {
  const [newBox, setNewBox] = useState<Array<Array<number>>>(BOX);
  const [clickOrders, setClickOrders] = useState<Array<Array<number>>>([]);
  const [removePoint, setRemovePoint] = useState(false);

  const handleClick = (rowIndex: number, colIndex: number) => {
    const modifyClickPoints = changeBoxStatus(newBox, (row, index) => {
      if (index === rowIndex) {
        return row?.map((col, colId) => (colId === colIndex ? 1 : col));
      }
      return row;
    });

    setClickOrders([...clickOrders, [rowIndex, colIndex]]);
    setNewBox(modifyClickPoints);
  };

  useEffect(() => {
    if (clickOrders?.length === getNestedArrSize(BOX)) {
      setRemovePoint(true);
    }

    if (clickOrders?.length === 0) {
      setRemovePoint(false);
    }
  }, [clickOrders]);

  useEffect(() => {
    function removeClickPoint() {
      const firstClickPoint = clickOrders[0];

      const modifyBoxStatus = changeBoxStatus(newBox, (row, index) => {
        if (index === firstClickPoint[0]) {
          return row?.map((col, colId) =>
            colId === firstClickPoint[1] ? 0 : col
          );
        }
        return row;
      });

      setClickOrders(clickOrders.slice(1));
      setNewBox(modifyBoxStatus);
    }
    if (removePoint) {
      setTimeout(() => {
        removeClickPoint();
      }, 1000);
    }
  }, [removePoint, clickOrders, newBox]);

  return (
    <div className="app_container">
      <div className="box_container">
        {BOX.map((row, rowIndex) =>
          row.map((_: number, colIndex: number) => (
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
      <div>
        {clickOrders?.map((row) => (
          <div className="box small">
            {row[0]} x {row[1]}
          </div>
        ))}
      </div>
    </div>
  );
}

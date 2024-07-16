import Data from "../data";
import ListGroup from "./ListGroup";
import ListItem from "./ListItem";

export default function Sidebar() {
  return (
    <ul className="sidebar">
      {Data.map((info) =>
        "children" in info ? (
          <ListGroup info={info} />
        ) : (
          <ListItem info={info} />
        )
      )}
    </ul>
  );
}

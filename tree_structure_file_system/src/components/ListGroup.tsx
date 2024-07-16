import { useState } from "react";
import { Item } from "../index.interfaces";
import ListItem from "./ListItem";
import HeaderItem from "./HeaderItem";

interface ListGroupProps {
  info: Item;
}
const ListGroup = ({ info }: ListGroupProps) => {
  const { label, link, id } = info;
  const [showChild, setShowChild] = useState(false);
  return (
    <ul>
      <HeaderItem
        info={{ label, link, id }}
        onOpen={() => setShowChild((prev) => !prev)}
      />
      {showChild && (
        <ul style={{ marginLeft: "1rem" }}>
          {info?.children?.map((item) =>
            "children" in item ? (
              <ListGroup info={item} />
            ) : (
              <ListItem info={item} />
            )
          )}
        </ul>
      )}
    </ul>
  );
};

export default ListGroup;

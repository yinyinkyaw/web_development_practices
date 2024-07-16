import { Item } from "../index.interfaces";
import "../index.css";

interface ListItemProp {
  info: Item;
  isHeader?: boolean;
}
const ListItem = ({ info, isHeader = false }: ListItemProp) => {
  const { label, link } = info;
  return (
    <li className={isHeader ? "header-li" : ""}>
      {isHeader && label}
      {!isHeader && <a href={link}>{label}</a>}
    </li>
  );
};

export default ListItem;

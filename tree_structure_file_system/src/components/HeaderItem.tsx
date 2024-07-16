import { Item } from "../index.interfaces";

interface HeaderItemProps {
  info: Item;
  onOpen: () => void;
}

const HeaderItem = ({ info, onOpen }: HeaderItemProps) => {
  return (
    <li className="header-li" onClick={onOpen}>
      {info.label}
    </li>
  );
};

export default HeaderItem;

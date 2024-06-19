import FabWrapper from "@components/FabWrapper/FabWrapper.component";
import "./App.css";
import { useState } from "react";
import FabContent from "@components/FabContent/FabContent.component";
import FabButton from "@components/FabButton/FabButton.component";
import FlashIcon from "@icons/flash.svg";
import BookIcon from "@icons/book.svg";
import ClipBoardIcon from "@icons/clipboard-text.svg";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app_container">
      <FabWrapper open={open} onOpenChange={setOpen}>
        <FabContent>
          <FabButton className="book_icon_btn">
            <BookIcon />
          </FabButton>
          <FabButton className="flash_icon_btn">
            <FlashIcon />
          </FabButton>
          <FabButton className="clipboard_icon_btn">
            <ClipBoardIcon />
          </FabButton>
        </FabContent>
      </FabWrapper>
    </div>
  );
}

export default App;

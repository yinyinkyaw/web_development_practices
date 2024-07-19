import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import UploadImage from "UploadImage";

function App() {
  return (
    <Fragment>
      <UploadImage />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontSize: "1.6rem" },
          success: {
            style: { backgroundColor: "var(--color-success)", color: "white" },
          },
        }}
      />
    </Fragment>
  );
}

export default App;

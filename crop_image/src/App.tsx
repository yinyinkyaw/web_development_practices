import { Fragment, useState } from "react";
import "./App.css";
import FileUploadButton from "@components/FileUploadButton";
import Modal from "@components/Modal.component";
import ImageCropper from "@components/ImageCropper";

function App() {
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleUploadFile = (files: FileList) => {
    setIsOpen(true);
    setUploadFile(files[0]);
  };

  return (
    <Fragment>
      <FileUploadButton handleUpload={handleUploadFile}>
        <button className="px-4 py-7 bg-blue-600 rounded-xl text-2xl font-semibold text-white w-80">
          Upload Image
        </button>
      </FileUploadButton>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        popupTitle="Crop Image"
      >
        {uploadFile && (
          <div className="relative h-96">
            <ImageCropper image={URL.createObjectURL(uploadFile)} />
          </div>
        )}
        <button className="w-full py-6 px-7 bg-blue-500 text-white text-2xl font-semibold rounded-full hover:bg-blue-600 transition-colors hover:shadow-md">
          Crop and Save
        </button>
      </Modal>
    </Fragment>
  );
}

export default App;

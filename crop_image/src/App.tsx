import { Fragment, useRef, useState } from "react";
import "./App.css";
import FileUploadButton from "@components/FileUploadButton";
import Modal from "@components/Modal.component";
import ImageCropper from "@components/ImageCropper";
import { Area } from "react-easy-crop";
import getCroppedImg from "utils";

function App() {
  const cropperRef = useRef<Area | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState("");

  const handleUploadFile = (files: FileList) => {
    setIsOpen(true);
    setUploadFile(files[0]);
  };

  const handleSaveImage = async () => {
    console.log("cropped area::", cropperRef?.current);
    // downloadImage(croppedImage);
    if (uploadFile && cropperRef) {
      const image = await getCroppedImg(
        URL.createObjectURL(uploadFile),
        cropperRef?.current as Area
      );

      setCroppedImage(image as string);
      setIsOpen(false);
    }
  };

  return (
    <Fragment>
      {/* File Upload Button */}
      <FileUploadButton handleUpload={handleUploadFile}>
        <button className="px-4 py-7 bg-blue-600 rounded-xl text-2xl font-semibold text-white w-80">
          Upload Image
        </button>
      </FileUploadButton>

      {/* Edit popup */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        popupTitle="Edit Image"
      >
        {uploadFile && (
          <div className="relative h-[400px]">
            <ImageCropper
              image={URL.createObjectURL(uploadFile)}
              cropperPixel={cropperRef}
            />
          </div>
        )}
        <button
          className="w-full py-6 px-7 bg-blue-500 text-white text-2xl font-semibold rounded-full hover:bg-blue-600 transition-colors hover:shadow-md"
          onClick={handleSaveImage}
        >
          Crop and Save
        </button>
      </Modal>
      {croppedImage && (
        <img
          src={croppedImage}
          alt="cropped image"
          className="mt-4 rounded-full w-[100px] h-[100px] object-cover"
        />
      )}
    </Fragment>
  );
}

export default App;

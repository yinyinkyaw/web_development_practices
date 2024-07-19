import { ChangeEvent, useState } from "react";

interface FileUploadButtonProps {
  children: React.ReactNode;
  handleUpload: (files: FileList) => void;
}
const FileUploadButton = ({
  handleUpload,
  children,
}: FileUploadButtonProps) => {
  const [file, setFile] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files?.length > 0) {
      handleUpload(files);
      setFile("");
    }
  };
  return (
    <div className="relative w-fit h-fit">
      {children}
      <input
        type="file"
        accept="image/*"
        value={file}
        onChange={onChange}
        className="absolute inset-0 opacity-0 w-full h-full border border-lime-500"
      />
    </div>
  );
};

export default FileUploadButton;

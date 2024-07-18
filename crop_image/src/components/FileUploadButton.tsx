import { ChangeEvent } from "react";

interface FileUploadButtonProps {
  children: React.ReactNode;
  handleUpload: (files: FileList) => void;
}
const FileUploadButton = ({
  handleUpload,
  children,
}: FileUploadButtonProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      handleUpload(files);
    }
  };
  return (
    <div className="relative w-fit h-fit">
      {children}
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="absolute inset-0 opacity-0"
      />
    </div>
  );
};

export default FileUploadButton;

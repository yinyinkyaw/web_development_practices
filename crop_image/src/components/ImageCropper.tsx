import { useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";

interface ImageCropperProps {
  image: string;
}
const ImageCropper = ({ image }: ImageCropperProps) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );
  return (
    <Cropper
      zoom={zoom}
      onZoomChange={setZoom}
      crop={crop}
      onCropChange={setCrop}
      image={image}
      onCropComplete={onCropComplete}
    />
  );
};

export default ImageCropper;

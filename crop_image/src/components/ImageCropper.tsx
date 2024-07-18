import { MutableRefObject, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
interface ImageCropperProps {
  image: string;
  cropperPixel: MutableRefObject<Area | null>;
}

const ImageCropper = ({ image, cropperPixel }: ImageCropperProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (_: Area, pixel: Area) => {
    cropperPixel.current = pixel;
  };

  return (
    <Cropper
      image={image}
      crop={crop}
      zoom={zoom}
      onCropChange={setCrop}
      onZoomChange={setZoom}
      onCropComplete={onCropComplete}
    />
  );
};

export default ImageCropper;

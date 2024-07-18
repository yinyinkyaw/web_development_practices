import { Fragment, MutableRefObject, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import Slider from "./Slider.component";
import clsx from "clsx";
interface ImageCropperProps {
  image: string;
  cropperPixel: MutableRefObject<Area | null>;
  height?: string;
  showSlider?: boolean;
}

const ImageCropper = ({
  image,
  cropperPixel,
  height = "h-[400px]",
  showSlider = true,
}: ImageCropperProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (_: Area, pixel: Area) => {
    cropperPixel.current = pixel;
  };

  return (
    <Fragment>
      <div className={clsx(`relative h-[400px]`, height)}>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>
      {showSlider && <Slider value={zoom} setValue={setZoom} />}
    </Fragment>
  );
};

export default ImageCropper;

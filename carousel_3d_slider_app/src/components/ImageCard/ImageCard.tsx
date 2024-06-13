import "./ImageCard.css";

const ImageCard = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <div className="image_cover">
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;

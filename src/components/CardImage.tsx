interface ImageComponentProps {
  src: string;
  alt: string;
}

function CardImage({ src, alt }: ImageComponentProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain h-48 w-96`}
      loading="lazy"
    />
  );
}

export default CardImage;

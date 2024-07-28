const BackgroundImageLight = () => {
  return (
    <picture>
      <source
        media="(max-width: 850px)"
        srcSet={"/images/pattern-background-tablet-light.svg"}
      ></source>
      <source
        media="(max-width: 465px)"
        srcSet="/images/pattern-background-mobile-light.svg"
      ></source>
      <img
        src="/images/pattern-background-desktop-light.svg"
        alt="dark background image"
      />
    </picture>
  );
};

export default BackgroundImageLight;

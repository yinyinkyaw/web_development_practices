const BackgroundImageDark = () => {
  return (
    <picture>
      <source
        media="(max-width: 850px)"
        srcSet={"/images/pattern-background-tablet-dark.svg"}
      ></source>
      <source
        media="(max-width: 465px)"
        srcSet="/images/pattern-background-mobile-dark.svg"
      ></source>
      <img
        src="/images/pattern-background-desktop-dark.svg"
        alt="dark background image"
      />
    </picture>
  );
};

export default BackgroundImageDark;

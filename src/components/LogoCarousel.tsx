"use client";
import type { ImageProps } from "@relume_io/relume-ui";

type Props = {
  images: ImageProps[];
};

export type Logo3Props = React.ComponentPropsWithoutRef<"section"> & Props;

const LogoCarousel = (props: Logo3Props) => {
  const { images } = {
    ...Logo3Defaults,
    ...props,
  } as Props;
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="flex items-center pt-[28px] md:pt-0">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 animate-loop-horizontally items-center"
            >
              {images.map((logo, index) => (
                <img
                  key={`${logo.alt}-${index}`}
                  className="mx-[28px] max-h-12 shrink-0 md:mx-10 md:max-h-14"
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

const Logo3Defaults: Logo3Props = {
  images: [
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 3",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 3",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 4",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 4",
    },
  ],
};

export default LogoCarousel;

import React from "react";
import AboutCard from "./AboutCard";
type Props = {};

const cardData = [
  {
    title: "Strategic Branding",
    description:
      "Develop a winning brand strategy that sets you apart. Our team helps you pinpoint your position in the market and crafts actionable steps to elevate your visibility and influence.",
    href: "/engineering",
  },
  {
    title: "Creative Design & Identity",
    description:
      "Transform your brand with compelling designs and a distinctive identity that captures your company&apos;s essence and appeals to your target audience.",
    href: "/engineering",
  },
  {
    title: "Integrated Marketing Solutions",
    description:
      "Extend your reach with our digital marketing services tailored to increase engagement and drive growth. From SEO to social media, we make sure your brand stands out.",
    href: "/engineering",
  },
  {
    title: "Expert Consulting & Management",
    description:
      "Leverage our expertise in managing your branding needs. We provide ongoing support and insight to keep your brand dynamic and aligned with industry trends.",
    href: "/engineering",
  },
];

const AboutCards = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cardData.map((card) => (
        <div key={card.title}>
          <AboutCard title={card.title} description={card.description} />
        </div>
      ))}
    </div>
  );
};

export default AboutCards;

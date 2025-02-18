import Image from "next/image";
import { CardComponent } from "../../collections/Card/Card";

import {
  StyledContainerMain,
  StyledTitleBig,
  StyledTitleSmall,
  StyledTextContainer,
  StyledImageContainer,
  StyledContainerCard,
  StyledContainerSecondMain,
  StyledParagraph,
  StyledTitleColor
} from "./elements";

const CardComponentProps = [{
  image: { src: "/img/card1img.png", alt: "", width: 65, height: 65 },
  title: "Brief",
  description: (
    <StyledParagraph>
      Complete <strong> brief writing and or simple guidance </strong> on what
      to include, we've got you coverted.
    </StyledParagraph>
  )},
    {
  image: { src: "/img/card2img.png", alt: "", width: 65, height: 65 },
  title: "Search",
  description: (
    <StyledParagraph>
      "In-depth agency search covering; <strong>criteria matching</strong>, door
      knocking and due dilligence vetting."
    </StyledParagraph>
  )},
    {
  image: { src: "/img/card3img.png", alt: "", width: 65, height: 65 },
  title: <StyledTitleColor>Pitch</StyledTitleColor>,
  description: (
    <StyledParagraph>
      "Comprehensive <strong>pitch management</strong>, including comms, diary
      management and pitch hosting."
    </StyledParagraph>
  )},

];


export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainerMain {...props}>
      <StyledTextContainer>
        <StyledTitleBig>{title}</StyledTitleBig>
        <StyledTitleSmall>{description}</StyledTitleSmall>
      </StyledTextContainer>
      <StyledContainerSecondMain {...props}>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledContainerCard {...props}>
         {CardComponentProps.map((props, index)=> (
          <CardComponent key={index} {...props} />
         ))}
        </StyledContainerCard>
      </StyledContainerSecondMain>
    </StyledContainerMain>
  );
};

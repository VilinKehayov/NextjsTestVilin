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
  StyledCardComponent,
} from "./elements";

const CardComponentProps1 = {
  image: { src: "/img/card1img.png", alt: "", width: 65, height: 65 },
  title: "Brief",
  description: (
    <p>
      Complete <strong> brief writing and or simple guidance </strong> on what
      to include, we've got you coverted.
    </p>
  ),
};
const CardComponentProps2 = {
  image: { src: "/img/card2img.png", alt: "", width: 65, height: 65 },
  title: "Search",
  description: (
    <p>
      "In-depth agency search covering; <strong>criteria matching</strong>, door
      knocking and due dilligence vetting."
    </p>
  ),
};
const CardComponentProps3 = {
  image: { src: "/img/card3img.png", alt: "", width: 65, height: 65 },
  title: <u>Pitch</u>,
  titleStyleProps: "color: #60baf6;",
  description: (
    <p>
      "Comprehensive <strong>pitch management</strong>, including comms, diary
      management and pitch hosting."
    </p>
  ),
};

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
          <CardComponent {...CardComponentProps1} />
          <CardComponent {...CardComponentProps2} />
          <StyledCardComponent {...CardComponentProps3} />
        </StyledContainerCard>
      </StyledContainerSecondMain>
    </StyledContainerMain>
  );
};

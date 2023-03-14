import Image from "next/image";
import { CardComponent } from "../../collections/Card/Card";
import { StyledContainer } from "../../collections/Card/elements";

const CardComponentProps1 = {
  image: { src: "/img/card1img.png", alt: "", width: 65, height: 65 },
  title: "Brief",
  description:
    "Complete brief writing and or simple guidance on what to include, we've got you coverted.",
};
const CardComponentProps2 = {
  image: { src: "/img/card2img.png", alt: "", width: 65, height: 65},
  title: "Search",
  description:
    "In-depth agency search covering;criteria matching, door knocking and due dilligence vetting.",
};
const CardComponentProps3 = {
  image: { src: "/img/card3img.png", alt: "", width: 65, height: 65 },
  title: "Pitch",
  description:
    "Comprehensive pitch management, including comms, diary management and pitch hosting.",
};

import {
  StyledContainerMain,
  StyledTitleBig,
  StyledTitleSmall,
  StyledTextContainer,
  StyledImageContainer,
  StyledContainerCard,
  StyledContainerSecondMain,
} from "./elements";

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
          <CardComponent {...CardComponentProps3} />
        </StyledContainerCard>
      </StyledContainerSecondMain>
    </StyledContainerMain>
  );
};

import Image from "next/image";
import CardComponent from "../../collections/Card/Card"

import {
  StyledContainerMain,
  StyledTitleBig,
  StyledTitleSmall,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";

export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainerMain {...props}>
      <StyledTextContainer>
        <StyledTitleBig>{title}</StyledTitleBig>
        <StyledTitleSmall>{description}</StyledTitleSmall>
        <CardComponent />
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
      </StyledTextContainer>
    </StyledContainerMain>
  );
};

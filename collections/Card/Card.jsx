import Image from "next/image";

import {
  StyledContainer,
  StyledTitleBold,
  StyledDescriptionSmall,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";

export const CardComponent = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledImageContainer>
        <Image {...image} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitleBold>{title}</StyledTitleBold>
        <StyledDescriptionSmall>{description}</StyledDescriptionSmall>
      </StyledTextContainer>
    </StyledContainer>
  );
};

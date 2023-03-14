import Image from "next/image";

import {
  StyledContainer,
  StyledTitleBold,
  StyledDescriptionSmall,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";

export const CardComponent = ({
  image,
  title,
  titleStyleProps,
  description,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledImageContainer>
        <Image {...image} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitleBold titleStyleProps={titleStyleProps}>
          {title}
        </StyledTitleBold>
        <StyledDescriptionSmall>{description}</StyledDescriptionSmall>
      </StyledTextContainer>
    </StyledContainer>
  );
};

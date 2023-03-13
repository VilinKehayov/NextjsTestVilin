import {
  StyledContainer,
  StyledTitleBold,
  StyledDescriptionSmall,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";


export const CardComponent = ({image, title, description, ...props}) => {
    return (
        <StyledContainer {...props}>
            <StyledTextContainer>
                <StyledTitleBold>{title}</StyledTitleBold>
                <StyledDescriptionSmall>{description}</StyledDescriptionSmall>
                <StyledImageContainer>
                    <Image />
                </StyledImageContainer>
            </StyledTextContainer>
        </StyledContainer>
    )
}
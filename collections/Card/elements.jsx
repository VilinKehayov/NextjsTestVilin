import styled from "styled-components"
import {SectionContainer, SectionBigHeading, SectionSubheading} from "~/components"

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  margin-bottom: 32px;
  background: #f7f7f7;
`;

export const StyledTitleBold = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 1.5rem;
`;

export const StyledDescriptionSmall = styled((props) => <SectionSubheading {...props} />)`
margin: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 65%;
  font-family: sans-serif;
  
 
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
margin: 45px 27px 29px;
`;

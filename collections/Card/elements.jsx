import styled from "styled-components"
import {SectionContainer, SectionBigHeading, SectionSubheading} from "~/components"

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
`;

export const StyledTitleBold = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescriptionSmall = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.3 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 65%;
  margin-left: 10rem;
  font-family: sans-serif;
  background: #D3D3D3;
  margin: 15px;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;

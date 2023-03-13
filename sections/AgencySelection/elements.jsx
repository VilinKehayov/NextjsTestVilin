import styled from "styled-components"
import {SectionContainer, SectionBigHeading, SectionSubheading} from "~/components";

export const StyledContainerMain = styled(({height, ...props}) => <SectionContainer {...props} />)`
align-items: center;
`;

export const StyledTitleBig = styled((props) => <SectionBigHeading {...props} />)`
margin: 0
color: black;
`;

export const StyledTitleSmall = styled((props)=> <SectionSubheading {...props} />)`
margin: 1.6rem 0 0;
`;

export const StyledTextContainer = styled(({...props})=> <div {...props} />)`
color: black;
width: 30%
margin-left: 11rem;
font-family: sans-serif;
`;

export const StyledImageContainer = styled(({...props})=> <div {...props} />)`
max-width: 32rem;
max-height: 65rem;
width: 100%
height: 100%
margin-left: auto;
`;

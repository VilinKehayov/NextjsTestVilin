import styled from "styled-components"
import {SectionContainer, SectionBigHeading, SectionSubheading} from "~/components";

export const StyledContainerMain = styled(({height, ...props}) => <SectionContainer {...props} />)`
align-items: center;
flex-direction: column;
`;

export const StyledTitleBig = styled((props) => <SectionBigHeading {...props} />)`
margin: 0
color: black;
`;

export const StyledTitleSmall = styled((props)=> <SectionSubheading {...props} />)`
margin: 1.6rem 0 0;
text-align: center;
`;

export const StyledTextContainer = styled(({...props})=> <div {...props} />)`
color: black;
width: 30%
margin-left: 11rem;
font-family: sans-serif;
text-align: center;
`;

export const StyledImageContainer = styled(({...props})=> <div {...props} />)`
max-width: 15rem;
max-height: 65rem;
width: 70%;
height: 70%;
margin-left: auto;
`;

export const StyledContainerCard = styled(({height, ...props}) => <SectionContainer {...props} />)`
flex-direction: column;
width: 60%;


`;

export const StyledContainerSecondMain = styled(({height, ...props}) => <SectionContainer {...props} />)`
flex-direction: row;
`;

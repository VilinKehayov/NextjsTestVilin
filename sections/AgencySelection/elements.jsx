import styled from "styled-components"
import {SectionContainer, SectionBigHeading, SectionSubheading} from "~/components";

export const StyledContainerMain = styled(({height, ...props}) => <SectionContainer {...props} />)`
align-items: center;
flex-direction: column;
background-image: url("img/background.png")
`;

export const StyledTitleBig = styled((props) => <SectionBigHeading {...props} />)`
margin: 20px 0 0 0;
color: black;
font-size: 4.5rem;
`;

export const StyledTitleSmall = styled((props)=> <SectionSubheading {...props} />)`
margin: 19px 0 0 0;
text-align: center;
font-size: 2.2rem;
`;

export const StyledTextContainer = styled(({...props})=> <div {...props} />)`
color: black;
width: 30%
margin-left: 11rem;
font-family: sans-serif;
text-align: center;
`;

export const StyledImageContainer = styled(({...props})=> <div {...props} />)`

max-width: 100%;
width: 360px;
height: 600px;
margin-left: auto;


margin-left: auto;
`;

export const StyledContainerCard = styled(({height, ...props}) => <SectionContainer {...props} />)`
flex-direction: column;
width: 60%;
margin: 50px 50px 50px 50px;


`;

export const StyledContainerSecondMain = styled(({height, ...props}) => <SectionContainer {...props} />)`
flex-direction: row;
margin-top: 45px;
align-items: center;
`;

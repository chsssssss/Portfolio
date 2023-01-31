import styled, { keyframes } from 'styled-components';
import { animation } from './styled-Component';


export const Box = styled.div`
width: 100%;
background: ${props => props.background || "#3282B8"};
text-align: center;
padding: 5rem;
`;


export const Title = styled.div`
font-family: "BlackHanSans";
font-size: 3rem;
color: ${props => props.color || '#EEEEEE' };
`;

export const Intro = styled.div`
text-align: center;
color: #EEEEEE;
font-size: 1.2rem;
font-family: "DoHyeon";
`;

export const Hr = styled.hr`
height: 8px;
background: #EEEEEE;
border: 0;
width: 70%;
margin-bottom: 2rem;
`;

export const more = keyframes`
50% {
transform: scale(1.1);
}`;

export const skill = keyframes`
50% {
    transform: translateY(-2rem);
}`;

export const More = styled.button`
color: #EEEEEE;
background: #222831;
width: 7.7rem;
height: 2.5rem;
border-radius: 1rem;
border: 0;
margin: 0 auto;
margin-top: 2.5rem;
font-family: "DoHyeon";
font-size: 1rem;
animation: ${more} 1s infinite;

&:hover{
animation: 0;
}
`;

export const Info = styled.div`
font-family: "DoHyeon";
font-weight: 500;
font-size: 1.5rem;
margin-bottom: 0.5rem;
color: #222831;
text-align: left;
`;

export const Info_des = styled.div`
font-family: "Dohyeon";
font-size: 1.2rem;
color : #222831;
`;

export const Info_field = styled.div`
display: block;
`;

export const Info_wrapper = styled.div`
display: inline-flex;
margin-bottom: 2rem;
margin-left: 6rem;
width: 330px;
`;

export const About = styled.div`
justify-content: flex-end;

padding: 2rem;
margin: 0 auto;
`;

export const Skill_inventory = styled.div`
display: flex;
flex-wrap: wrap;
margin: 3rem auto 0 auto;
width: 72rem;
`;

export const Skill_Box = styled.div`
background-color: white;
margin: 2rem;
border-radius: 1rem;
width: 20rem;
font-family: "DoHyeon";
font-size: 1.5rem;
color: #1B262C;
animation: ${skill} 1s ;
`;

export const Project_Box = styled.div`
background-color: "#EEEEEE";
border-radius: 1rem;

`;
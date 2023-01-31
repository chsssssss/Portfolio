import React from 'react'
import styled from 'styled-components'
import { Box, Title, Info_wrapper, Info, Info_des, Info_field, About, Hr } from './styled-Component';
import PersonIcon from '@mui/icons-material/Person';
import Person from '@mui/icons-material/Person';

export const AboutMe = () => {
    const myRef = React.useRef(null);
    const scrollToElement = () => myRef.current.scrollIntoView({ behavior: 'smooth'});
  
    const myInfo = [
        {item: '이름', info: '차희선'},
        {item: '생년월일', info: '01.05.31'},
        {item: '주소지', info: '대구광역시'},
        {item: '연락처', info: '010-1234-5678'},
        {item: '이메일', info: 'chaheesun531@naver.com'},
        {item: '학력', info: '계명대학교 컴퓨터공학과'}
    ];
    
    const list = myInfo.map((myInfo) => (
        <Info_wrapper>
            <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}} />
            <Info_field>
                <Info>{myInfo.item} </Info>
                <Info_des>{myInfo.info}</Info_des>
            </Info_field>
        </Info_wrapper>
    ));
    
  return (
    <Box background="white" ref={myRef}>
        <Title color="#1B262C">About Me</Title>
        <button onClick={scrollToElement}>버튼</button>
        <Hr />
        <About>
    <Info_wrapper>
                <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}}></PersonIcon>
                <Info_field>
                    <Info>이름</Info>
                    <Info_des>차희선</Info_des>
                </Info_field>
            </Info_wrapper>
            <Info_wrapper>
                <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}}></PersonIcon>
                <Info_field>
                    <Info>생년월일</Info>
                    <Info_des>2001.05.31</Info_des>
                </Info_field>
            </Info_wrapper>
            <br />
            <Info_wrapper>
                <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}}></PersonIcon>
                <Info_field>
                    <Info>주소지</Info>
                    <Info_des>대구광역시 북구</Info_des>
                </Info_field>
            </Info_wrapper>
            <Info_wrapper>
                <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}}></PersonIcon>
                <Info_field>
                    <Info>연락처</Info>
                    <Info_des>010-1234-5678</Info_des>
                </Info_field>
            </Info_wrapper>
            <br />
            <Info_wrapper>
                <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}}></PersonIcon>
                <Info_field>
                    <Info>이메일</Info>
                    <Info_des>chaheesun531@naver.com</Info_des>
                </Info_field>
            </Info_wrapper>
            <Info_wrapper>
                <PersonIcon fontSize='large'
                style={{marginRight: '3rem',
                color: '#222831'}}></PersonIcon>
                <Info_field>
                    <Info>학력</Info>
                    <Info_des>계명대학교 컴퓨터공학과</Info_des>
                </Info_field>
            </Info_wrapper>

        </About>
    </Box>
  )
}

export default AboutMe;
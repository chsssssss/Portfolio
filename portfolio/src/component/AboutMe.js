import React from 'react'
import styled from 'styled-components'
import { Box2, Title, Info_wrapper, Info, Info_des, Info_field, About, Hr } from './styled-Component';
import PersonIcon from '@mui/icons-material/Person';

const AboutMe = () => {
  return (
    <Box2>
        <Title color="#1B262C">About Me</Title>
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
                    <Info_des>010-4884-3200</Info_des>
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
    </Box2>
  )
}

export default AboutMe;
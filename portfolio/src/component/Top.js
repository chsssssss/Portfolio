import React from 'react';
import styled from 'styled-components';
import { Box, Title, Hr, Intro, More } from './styled-Component';


const AboutMe = () => {
  return (
    <>
    <Box>
      <Title>- 차희선의 포트폴리오 -</Title>
      <Hr />
      <Intro>
      안녕하세요. 웹 개발자가 되고 싶은 차희선입니다. <br />
      어쩌고 저쩌고
      </Intro>
      <More>더 알아보기 👇</More>
    </Box>
    </>
  )
}

export default AboutMe;
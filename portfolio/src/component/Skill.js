import React from 'react'
import { Box3, Title, Skill_Box, Skill_inventory, Hr } from './styled-Component'

const Skill = () => {
  return (
    <Box3>
        <Title color='#1B262C'>Skill</Title>
        <Skill_inventory>
            <Skill_Box>Frontend</Skill_Box>
            <Skill_Box>Backend</Skill_Box>
            <Skill_Box>Version Control</Skill_Box>
            <Skill_Box>Mobile App</Skill_Box>
            <Skill_Box>Communication</Skill_Box>
            <Skill_Box>Deployment</Skill_Box>
            <Skill_Box>Certificate</Skill_Box>
        </Skill_inventory>
    </Box3>
  )
}

export default Skill
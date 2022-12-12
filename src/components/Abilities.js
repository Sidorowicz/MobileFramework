 
 
import { Box, Typography } from '@mui/material' 
import React from 'react'
import { Ability } from './Ability'

export const Abilities = ({pokemon}) => { 
 
  return (
    <> 
    {pokemon.abilities.map((i,index)=>{
      return (
        <Box key={index}>
      <Typography variant='h6'>{i.ability.name+' : '}</Typography>
      <Ability url={i.ability.name}/> 
      </Box>
      )
      })}
    </>
  )
}

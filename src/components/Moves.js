import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Ability } from './Ability'
import Move from './Move'

export const Moves = ({pokemon}) => {
  return (
    <Box>
        {
            pokemon.moves.map((move,index)=>{
                return (
                    <Box key={index}>
                        <Typography variant='h6'>{move.move.name+' : '}</Typography>
                        <Move url={move.move.name}/> 
                    </Box>
                )
            })
        }
    </Box>
  )
}

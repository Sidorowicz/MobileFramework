import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Abilities } from './Abilities'
import { AccordionComponent } from './AccordionComponent'
import ImageComponent from './Image'
import CloseIcon from '@mui/icons-material/Close';
import { Stats } from './Stats'

export const SelectedPokemon = ({pokemon,setSelectedPokemon}) => {
    const pokemonData = useMemo(() => { return pokemon }, [pokemon])
    const [forms,setForms]=useState([]); 
    const generateTypeColor = (color) => { 
        switch (color) {
            case 'normal':
                return 'grey'
            case 'fire':
                return 'red'
            case 'water':
                return 'blue'
            case 'grass':
                return 'green'
            case 'flying':
                return 'lightgrey'
            case 'fighting':
                return 'darkred'
            case 'poision':
                return 'violet'
            case 'electric':
                return 'yellow'
            case 'ground':
                return 'lightbrown'
            case 'psychic':
                return 'pink'
            case 'ice':
                return 'lightblue'
            case 'bug':
                return 'lightgreen' 
            default:
                return "grey"
        }
    }
    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
 
      
    return (
        <Box sx={{ display: 'flex',my:2, p:1,border:'2px solid grey', flexDirection: 'column', alignItems: 'center', background: `${generateTypeColor(pokemonData.types[0].type.name)}`,  }} >
            <Typography sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center',width:'100%'}}>
                {' Number ' + pokemonData.id + ' : ' + capitalizeFirstLetter(pokemonData.name) + ' '}
                <CloseIcon sx={{fontSize:30}} onClick={() => { setSelectedPokemon() }}/>
            </Typography>
            <ImageComponent url={pokemonData.sprites.front_default} />
            <Box sx={{display:'flex',alignItems:'center', }}> {pokemonData.types.map((type, index)=> {
                return <Box key={index} sx={{p:1 , border: '1px solid black', borderRadius:20,mx:1, background:`${generateTypeColor(type.type.name)}`}}>{type.type.name}</Box>
                })}</Box>
            <AccordionComponent title={'Abilities'} desc={<Abilities pokemon={pokemon} />} />
            <AccordionComponent title={'Forms'} desc={'forms'} />
            <AccordionComponent title={'Stats'} desc={<Stats stats={pokemonData.stats} />} />

        </Box >
    )
}

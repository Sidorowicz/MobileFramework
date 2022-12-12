import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { AccordionComponent } from '../../components/AccordionComponent'
import ImageComponent from '../../components/Image'
import { Stats } from '../../components/Stats'
import useImageCaching from '../../hooks/useImageCaching '

export const Pokemon = ({ pokemon, setSelectedPokemon }) => {
    const pokemonData = useMemo(() => { return pokemon }, [pokemon])
    const [selected, setSelected] = useState(false)
    const generateTypeColor = (colorArray) => {
        let color = colorArray[0].type.name;
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

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: `${generateTypeColor(pokemonData.types)}`,m:1, border:'1px solid #666666'}} onClick={() => {
            setSelectedPokemon(pokemon)
        }}>
            <Typography>{capitalizeFirstLetter(pokemonData.name)}</Typography>
            <ImageComponent url={pokemonData.sprites.front_default} />
        </Box>

    )
}

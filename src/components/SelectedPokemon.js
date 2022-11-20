import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import { AccordionComponent } from './AccordionComponent'
import ImageComponent from './Image'
import { Stats } from './Stats'

export const SelectedPokemon = ({pokemon,setSelectedPokemon}) => {
    const pokemonData = useMemo(() => { return pokemon }, [pokemon])
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
            case 'fire':
                return 'red'
            default:
                return "grey"
        }
    }
    return (
        <Box fullWidth sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: `${generateTypeColor(pokemonData.types)}` }} >
            <Typography sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                {' Number ' + pokemonData.id + ' : ' + pokemonData.name + ' '}
                <Button onClick={() => { setSelectedPokemon() }}>
                    X
                </Button>
            </Typography>
            <ImageComponent url={pokemonData.sprites.front_default} />
            <AccordionComponent title={'Abilities'} desc={'abilities'} />
            <AccordionComponent title={'Forms'} desc={'forms'} />
            <AccordionComponent title={'Stats'} desc={<Stats stats={pokemonData.stats} />} />

        </Box >
    )
}

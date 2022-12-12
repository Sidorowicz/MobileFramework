import { Button, Grid, Input, InputAdornment, List, ListItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SelectedPokemon } from '../../components/SelectedPokemon'
import { Pokemon } from './Pokemon'
import Search from '@mui/icons-material/Search';
import CircleOutlinedIcon from '@mui/icons-material/Circle';
export const PokemonList = () => {
    const [pokemon, setPokemon] = useState([])
    const [search, setSearch] = useState('') 
    const [selectedPokemon,setSelectedPokemon]=useState()

    const findPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(res => {
                setPokemon([...pokemon, res.data]);
            })
            .catch(error => {
                console.log(error)
            }) 
    } 

    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', background: 'darkred', color: 'white', p: 0, m: -1, }}>
            <Typography variant="h5" sx={{ display: 'flex', alignItems:'center',justifyContent: 'start', p: 2 }}>
                <CircleOutlinedIcon sx={{fontSize:40, color:'blue', mr:4}}/>Pokedex
            </Typography>

            <Input placeholder="Pokemon name"  
            endAdornment={
                <InputAdornment position="end">
                  <Search onClick={findPokemon} sx={{color:'white'}}/>
                </InputAdornment>
              }
            onChange={(e) => { setSearch(e.target.value) }} variant="standard" sx={{ mx: 2, display: 'flex', color: 'white' }} />
            
            {
                selectedPokemon &&
                <SelectedPokemon pokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
            }

            {pokemon &&
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    {pokemon.map(((tem, index) => { return <Pokemon pokemon={tem} key={index} setSelectedPokemon={setSelectedPokemon}/> }))}
                </Box>

            }
        </Box>
    )
}

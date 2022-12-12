import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Ability = ({url}) => {
    const [desc,setDesc]=useState()
    useEffect(()=>{
        {
            axios.get(`https://pokeapi.co/api/v2/ability/${url}`)
            .then(res => {
                setDesc(res.data.effect_entries[1].effect)
            })
            .catch(error => {
                console.log(error)
            }) 
            }
    },[url])
  return (
    <>{desc}</>
  )
}

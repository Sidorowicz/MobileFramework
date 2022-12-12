import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Move = ({url}) => {
    const [desc,setDesc]=useState()
    useEffect(()=>{
        {
            axios.get(`https://pokeapi.co/api/v2/move/${url}`)
            .then(res => { 
                setDesc(res.data.effect_entries[0].effect)
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

export default Move
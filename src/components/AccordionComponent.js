import { AccordionDetails, Accordion, AccordionSummary, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const AccordionComponent = ({title,desc}) => {
    return (
        <Box sx={{width:'100%', display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column', my:1}}>
            <Accordion sx={{width:'90%', m:1}}>
                <AccordionSummary  >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{background:'lightgrey',}}>
                    
                        {desc} 
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

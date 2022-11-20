import { AccordionDetails, Accordion, AccordionSummary, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const AccordionComponent = ({title,desc}) => {
    return (
        <Box sx={{width:'100%', m:1}}>
            <Accordion>
                <AccordionSummary  >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {desc}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

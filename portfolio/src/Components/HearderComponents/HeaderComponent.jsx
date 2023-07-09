import React from 'react'
import{ Box, makeStyles } from '@mui/material'

const useStyles = makeStyles(() => ({
    HeardeWraper:{
        color:"pink"
    }
}))

export default function HeaderComponent() {
    const classes = useStyles()
  return (
   <Box className={classes.HeardeWraper}>
    <h1>Hello for header wraper</h1>
   </Box>
  )
}

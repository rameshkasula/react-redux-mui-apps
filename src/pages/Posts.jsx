import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Fragment } from 'react'

const Posts = () => {
  return (
    <Fragment>
        <Box>
            <Container maxWidth='xs'>
                <Typography>{'Posts'}</Typography>
            </Container>
        </Box>
    </Fragment>
  )
}

export default Posts
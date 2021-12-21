import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Stats from './Stats/Stats'
import Container from '@material-ui/core/Container'
import ProductList from './ProductList'
import Filter from './Filter'

const generateClassName = createGenerateClassName({
  productionPrefix: 'plp',
  disableGlobal: true,
})

export default () => {
  return (
    <main>
      <Container style={{ marginTop: 16 }}>
        <Stats />
        <Box mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Filter />
            </Grid>
            <Grid item xs={12} sm={10}>
              <ProductList />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  )
}

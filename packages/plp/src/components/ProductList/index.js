import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <Box component={'section'}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductItem />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductList

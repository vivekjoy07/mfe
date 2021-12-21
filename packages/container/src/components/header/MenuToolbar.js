import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'

import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),

    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  mainToolbar: {
    backgroundColor: 'red',
  },
  menuToolbar: {
    backgroundColor: '#f0f0f0',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#444',

    '&:hover': {
      textDecoration: 'none',
    },
  },
  linkText: {
    fontWeight: '600',
    fontSize: 14,
  },
  holidayText: {
    color: theme.palette.secondary.main,
  },
}))

const MenuToolbar = () => {
  const classes = useStyles()

  return (
    <Toolbar className={classes.menuToolbar}>
      <IconButton edge="start" className={classes.menuButton} aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <Box display={'flex'}>
        <Link href="/categories/all-categories" className={classes.link}>
          <Typography className={classes.linkText}>All categories</Typography>
        </Link>

        <Link href="/categories/grocery" className={classes.link}>
          <Typography className={classes.linkText}>Grocery,Household & Pet</Typography>
        </Link>
        <Link href="/categories/tv-electronics" className={classes.link}>
          <Typography className={classes.linkText}>Tv & Electronics</Typography>
        </Link>

        <Link href="/categories/benefits" className={classes.link}>
          <Typography className={classes.linkText}>Benefits</Typography>
        </Link>
      </Box>

      <Box display={'flex'} flexGrow={1} justifyContent={'flex-end'} alignItems={'center'}>
        <Link href="/categories/coupons" className={classes.link}>
          <Typography className={classes.linkText}>Coupons</Typography>
        </Link>

        <Link href="/categories/holiday-deals" className={classes.link}>
          <Box display={'flex'} alignItems={'center'}>
            <IconButton edge="start" aria-label="open drawer">
              <CardGiftcardIcon color="secondary" />
            </IconButton>
            <Typography className={`${classes.linkText} ${classes.holidayText}`}>
              Holiday Deals
            </Typography>
          </Box>
        </Link>

        <Link href="/categories/join" className={classes.link}>
          <Typography className={classes.linkText}>Join</Typography>
        </Link>
      </Box>
    </Toolbar>
  )
}

export default MenuToolbar

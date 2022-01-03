import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles, alpha } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import MenuToolbar from './header/MenuToolbar'
import { useStore } from 'store/store'

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
  search: {
    position: 'relative',
    borderRadius: 20,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777',
  },
  inputRoot: {
    // color: 'inherit',
    // backgroundColor: 'white',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
  brand: {
    textDecoration: 'none',
    color: '#fff',
  },
}))

export default function ProminentAppBar() {
  const { count } = useStore()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar className={classes.mainToolbar}>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Link to="/" className={classes.brand}>
              <Typography variant="h4">MFD</Typography>
            </Link>
          </Box>
          <Box flexGrow={1}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Typography color="white">{count}</Typography>
          </Box>
        </Toolbar>
        <MenuToolbar />
      </AppBar>
    </div>
  )
}

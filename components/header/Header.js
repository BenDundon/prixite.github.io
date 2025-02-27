import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
  Button,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logoImg from '../../public/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import { pages, siteName } from '../../data/data'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Header = ({ children, bgImg, title }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const router = useRouter()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (page) => {
    if (page.path !== router.path) {
      router.push(page.path)
    }

    setAnchorElNav(null)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        className="header-container"
        sx={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImg?.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <AppBar position="static" className="header-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={logoImg}
                  alt={siteName}
                  onClick={() => router.push('/')}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box
                sx={{
                  flexGrow: 50,
                  display: { xs: 'flex', md: 'none' },
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={logoImg}
                  alt={siteName}
                  onClick={() => router.push('/')}
                />
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleCloseNavMenu(page)}
                    >
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                className="header-menu"
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                {pages.map((page, index) => {
                  if (page.text == 'Contact Us') {
                    return (
                      <Link
                        href={page?.path}
                        sx={{ textDecoration: 'none' }}
                        key={index}
                        passHref
                      >
                        <Button className="contact-us-button" sx={{ mx: 2 }}>
                          {page.text}
                        </Button>
                      </Link>
                    )
                  }
                  return (
                    <Link
                      href={page?.path}
                      sx={{ textDecoration: 'none' }}
                      key={index}
                      passHref
                    >
                      <Typography
                        className="header-menu-items"
                        sx={{
                          mx: 2,
                          color:
                            router.asPath == page.path
                              ? 'var(--primary-green)'
                              : 'white',
                        }}
                        textAlign="center"
                      >
                        {page.text}
                      </Typography>
                    </Link>
                  )
                })}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {children}
      </Box>
    </>
  )
}

export default Header

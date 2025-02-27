import React from 'react'
import { mobileAppDevelopment } from '../data/data'
import Header from '../components/header/Header'
import mobileAppImg from '../public/images/wordpress Development-01.png'
import mobileAppBgImg from '../public/images/mobileDev.jpg'
import { Container, Stack, Box, Typography, Divider } from '@mui/material'
import Image from 'next/image'

const MobileApplicationDevelopment = () => {
  const { title, header, heading, details, description, paraList } =
    mobileAppDevelopment
  return (
    <>
      <Header bgImg={mobileAppBgImg} title={title}>
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: '80px', lg: '200px' }}
            pb={{ xs: '100px', lg: '200px' }}
            direction={{ xs: 'column', md: 'row' }}
            spacing={5}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {header}
              </Typography>
              <Divider
                textAlign="left"
                sx={{
                  width: '17%',
                  marginTop: '2rem',
                  borderColor: 'var(--primary-green)',
                  borderWidth: '1px',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600',
                  marginTop: '1rem',
                  color: 'white',
                }}
              >
                {heading}
              </Typography>
            </Box>
            <Box textAlign="left">
              <Image
                unoptimized
                priority
                src={mobileAppImg}
                width={400}
                height={250}
                alt="service-image"
              />
            </Box>
          </Stack>
        </Container>
      </Header>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          py: 10,
          opacity: 0.8,
        }}
        maxWidth="xl"
      >
        {details.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}

        <Typography>{description}</Typography>

        {paraList.map((item, index) => (
          <Box key={index}>
            <ul className="wordpress-list">
              <li>{item}</li>
            </ul>
          </Box>
        ))}
      </Container>
    </>
  )
}

export default MobileApplicationDevelopment

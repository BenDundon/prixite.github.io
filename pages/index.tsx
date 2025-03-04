import Image from 'next/image'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Grid,
  Button,
} from '@mui/material'
import { homeData, services, servicesHeading } from '../data/data'
import { useRouter } from 'next/router'

export default function Home() {
  const {
    title,
    header,
    headerImage,
    heading,
    descriptionHeading,
    paragraphs,
  } = homeData

  const router = useRouter()
  return (
    <div className="home-page-container">
      <Header bgImg={homePageBg} title={title}>
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: '60px', lg: '110px' }}
            pb={{ xs: '100px', lg: '80px' }}
            direction={{ xs: 'column', md: 'row' }}
            spacing={8}
          >
            <Box>
              <Typography variant="h6" className="home-main-heading-1">
                {header}
              </Typography>

              <Divider
                textAlign="left"
                className="divider"
                sx={{ width: '17%' }}
              />

              <Typography variant="h4" className="home-main-heading-2">
                {heading}
              </Typography>
            </Box>

            <Box textAlign="center">
              <Image
                unoptimized
                priority
                src={headerImage}
                width={400}
                height={300}
                alt="service-image"
              />
            </Box>
          </Stack>
        </Container>
      </Header>
      <Container maxWidth="xl">
        <Box p="5rem 1.5rem">
          <Typography variant="h5" fontWeight="600">
            {descriptionHeading}
          </Typography>

          {paragraphs.map((item, index) => (
            <Typography margin="1.8rem 0" key={index}>
              {item.para}
            </Typography>
          ))}

          <Typography variant="h4" className="service-heading">
            {servicesHeading}
          </Typography>

          <Divider
            variant="middle"
            className="service-divider"
            sx={{ mx: 'auto', fill: 'true', width: '8%' }}
          />

          <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={10}>
            {services.map((item, index) => (
              <Grid item sm={12} md={6} key={index}>
                <Box marginBottom="10px">
                  <div className="service-image">
                    <Image
                      src={item.img}
                      objectFit="cover"
                      width={800}
                      height={500}
                      className="service-image"
                      onClick={() => router.push(item.path)}
                      alt="service-image"
                    />
                  </div>

                  <Typography variant="h6" fontWeight="600" mt="20px">
                    {item.title}
                  </Typography>

                  <Typography className="service-description">
                    {item.desc}
                  </Typography>

                  <Box textAlign="center" mt="2rem">
                    <Button
                      className="service-button"
                      endIcon={<ArrowRightAltIcon />}
                      onClick={() => router.push(item.path)}
                    >
                      {item.buttonText}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

import Head from 'next/head'
import { Container } from '@mui/material'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>O нас</title>
      </Head>

      <div className="about">
        <Container maxWidth="xl">O нас</Container>
      </div>
    </>
  )
}

export default AboutPage

import Head from 'next/head'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>

      <div className="home">
        <Container maxWidth="xl">Главная</Container>
      </div>
    </>
  )
}

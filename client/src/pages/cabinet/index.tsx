import Head from 'next/head'
import { Container } from '@mui/material'

const CabinetPage = () => {
  return (
    <>
      <Head>
        <title>Кабинет</title>
      </Head>

      <div className="cabinet">
        <Container maxWidth="xl">Кабинет</Container>
      </div>
    </>
  )
}

export default CabinetPage

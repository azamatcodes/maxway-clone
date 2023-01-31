import Head from 'next/head'
import { Container } from '@mui/material'

const BranchesPage = () => {
  return (
    <>
      <Head>
        <title>Филиалы</title>
      </Head>

      <div className="branches">
        <Container maxWidth="xl">Филиалы</Container>
      </div>
    </>
  )
}

export default BranchesPage

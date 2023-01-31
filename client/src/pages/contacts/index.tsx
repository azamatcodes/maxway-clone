import Head from 'next/head'
import { Container } from '@mui/material'

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <div className="contacts">
        <Container maxWidth="xl">Контакты</Container>
      </div>
    </>
  )
}

export default ContactsPage

import Head from 'next/head'
import { Container } from '@mui/material'

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>

      <div className="cart">
        <Container maxWidth="xl">Корзина</Container>
      </div>
    </>
  )
}

export default CartPage

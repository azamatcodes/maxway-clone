import Link from 'next/link'
import { Box, Container } from '@mui/material'
import {Space} from "antd";

const Header = () => {
  return (
    <header className="header">
      <Container maxWidth="xl">
        <Box display="flex" gap="1rem" py="1rem">
          <div className="logo">
            <Link href="/">Логотип</Link>
          </div>

          <Box display="flex" flex={1}>
            <Box className="nav" component="nav" flex={1}>
              <Box className="nav__list" component="ul" display="flex" gap="1rem">
                <li className="nav__item">
                  <Link className="nav__link" href="/">
                    Меню
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" href="/branches">
                    Филиалы
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" href="/about">
                    O нас
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" href="/contacts">
                    Контакты
                  </Link>
                </li>
              </Box>
            </Box>

            <Box component="ul" display="flex" gap="1rem">
              <li>Локация</li>
              <li>Языки</li>
            </Box>
          </Box>

          <Box>
            <Box component="ul" display="flex" gap="1rem">
              <li>
                <Link href="/cart">Корзина</Link>
              </li>
              <li>
                <Link href="/cabinet">Профиль</Link>
              </li>
            </Box>
          </Box>
        </Box>
      </Container>
    </header>
  )
}

export default Header

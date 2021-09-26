import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'

import * as S from './styled'

interface IHeaderProps {
  size: 'normal' | 'small'
  children: React.ReactChild
}
const Header: React.FC = ({ children }: IHeaderProps) => {
  const router = useRouter() || {pathname:'myroute'}
  let showBack = false

  if (router.pathname.includes('show')) {
    showBack = true
  }

  return (
    <S.HeaderContainer>
      <S.LinkStyled >
        {showBack &&
          <Link href="/">
           Back
          </Link>
        }
        </S.LinkStyled>
      {children}
    </S.HeaderContainer>
  )
}

export default Header

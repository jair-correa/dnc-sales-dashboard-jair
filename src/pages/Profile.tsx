import { useContext } from 'react'
import { Header, CardComponent, StyledButton } from '@/components'
import { AppThemeContext } from '@/contexts/AppThemeContext'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeContext?.toogleTheme}>
          Trocar para tema{' '}
          {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
        </StyledButton>
      </CardComponent>
    </>
  )
}

export default Profile

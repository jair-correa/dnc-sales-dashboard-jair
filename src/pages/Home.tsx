import { AvatarList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currecyConverter } from '@/utils'

function Home() {
  const mocklistData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currecyConverter(123455.78),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currecyConverter(893455.78),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currecyConverter(923455.78),
    },
  ]
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mocklistData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home

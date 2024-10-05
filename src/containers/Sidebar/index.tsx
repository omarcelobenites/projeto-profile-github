import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocatema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Marcelo Benites</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        omarcelobenites
      </Paragrafo>
      <Descricao fontSize={14}> Engenheiro front end</Descricao>
      <BotaoTema onClick={props.trocatema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

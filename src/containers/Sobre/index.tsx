import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex
      placeat cumque. Quos asperiores veritatis maiores, animi hic voluptate id
      sequi alias! Consequatur architecto, fugit libero asperiores vero labore
      impedit.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=omarcelobenites&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&GithubSecaoable_animations=false&theme=dracula&locale=en&hide_border=false&order=1"
        alt="stats graph"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=omarcelobenites&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2"
        alt="languages graph"
      />
    </GithubSecao>
  </section>
)

export default Sobre

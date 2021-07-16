import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { AlurakutMenu } from '../src/lib/AluraKutCommons'

function ProfileSidebar(properties) {
  return (
    <Box>
      <img
        src={`https://github.com/${properties.githubUser}.png`}
        alt="Profile picture"
        style={{ borderRadius: '10px' }}  
      />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'henriquesss'

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>Bem vindo</Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
          <Box>Pessoas da comunidade</Box>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  )
}

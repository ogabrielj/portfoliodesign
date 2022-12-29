import Head from 'next/head'
import NavbarDesktopComponent from '../components/global/NavbarDesktop'
import ContatoComponent from '../components/pages/Contato'
import FooterComponent from '../components/pages/Footer'
import HeaderComponent from '../components/pages/Header'
import ProjectsComponent from '../components/pages/Projects'
import SobreComponent from '../components/pages/Sobre'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 md:container md:mx-auto">

        <NavbarDesktopComponent />

        <main className='mt-20 flex items-center justify-center flex-col'>
          
          <HeaderComponent />
          <SobreComponent />
          <ProjectsComponent />
          <ContatoComponent />
          
        </main>
      </div>

      <FooterComponent />
    </>
  )
}

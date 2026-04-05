import { HeroSection } from '../features/home'
import { MenuSection } from '../features/menu'
import { Header } from '../shared/components/Header/Header'
import { Footer } from '../shared/components/Footer/Footer'
import { RootLayout } from '../shared/components/Layout/RootLayout'

function App() {
  return (
    <RootLayout>
      <Header />
      <HeroSection />
      <MenuSection />
      <Footer />
    </RootLayout>
  )
}

export default App

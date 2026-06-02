import { motion } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Stats } from './components/sections/Stats'
import { Projects } from './components/sections/Projects'
import { Process } from './components/sections/Process'
import { Founders } from './components/sections/Founders'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { LogoShowcase } from './components/sections/LogoShowcase'
import { Footer } from './components/Footer'
import { StickyCTA } from './components/StickyCTA'

export default function App() {
  useLenis()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-bg min-h-screen"
    >
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Founders />
      <LogoShowcase />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
    </motion.div>
  )
}

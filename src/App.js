import { Header } from './cmps/header/Header'
import { Nav } from './cmps/nav/Nav'
import { About } from './cmps/about/About'
import { Experince } from './cmps/experience/Experince'
import { Portfolio } from './cmps/portfolio/Portfolio'
import { Testimonials } from './cmps/Testimonials'
import { Contact } from './cmps/contact/Contact'
import { Footer } from './cmps/Footer'
import { Services } from './cmps/Services'


export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}


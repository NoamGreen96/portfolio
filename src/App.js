import { Header } from './cmps/Header'
import { Nav } from './cmps/Nav'
import { About } from './cmps/About'
import { Experince } from './cmps/Experince'
import { Portfolio } from './cmps/Portfolio'
import { Testimonials } from './cmps/Testimonials'
import { Contacts } from './cmps/Contacts'
import { Footer } from './cmps/Footer'


export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experince />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />

    </div>
  );
}


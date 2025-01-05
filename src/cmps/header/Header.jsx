import { CTA } from '../header/CTA'
import { HeaderSocial } from '../header/HaderSocials'
import ME from '../../assets/img/me.png'

export function Header() {

  return (
    <header>
      <div className="container header-container">
        <h2>Hello I'm</h2>
        <h1>Noam Green</h1>
        <h3 className="text-light">Full Stack Developer</h3>
        <CTA />
        <div className='icon-container'>
          <HeaderSocial />
        </div>
        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}
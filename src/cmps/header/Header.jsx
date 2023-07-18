import { CTA } from '../header/CTA'
import { HeaderSocial } from '../header/HaderSocials'
import ME from '../../assets/img/me.png'

export function Header() {

  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Noam Green</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}
import { useRef } from 'react'
import emailjs from 'emailjs-com'

import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


export function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_xhssphg', 'template_m8tvg6e', form.current, 'PMOpxWjnHtxv8Cn7j')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className='conatct-option-icon' />
            <h4>Email</h4>
            <h5>Noamgr11@gmail.com</h5>
            <a href="mailto:Noamgr11@gmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='conatct-option-icon' />
            <h4>Messenger</h4>
            <h5>Noam Green</h5>
            <a href="http://m.me/noam.green.420/" target='_blank'>Send a massage</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='conatct-option-icon' />
            <h4>WhatsApp</h4>
            <h5>+972 50 7645 379</h5>
            <a href="https://api.whatsapp.com/send?phone=+972507645379" target='_blank'>Send a massage</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required
          />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Massage' required
          ></textarea>
          <button type='submin' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
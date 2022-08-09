import styled from 'styled-components'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PlaceIcon from '@mui/icons-material/Place'
import CallIcon from '@mui/icons-material/Call'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import Telegram from '@mui/icons-material/Telegram'
import emailjs from '@emailjs/browser'
import StyledContact from './styles'


export default function ContactUs() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("Message here...")

  const form = useRef()
  const router = useRouter()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
    .then((result)=> {
        console.log(result);
    }, (error) => {
      console.log(error.text)
    })
  }

  // function handleSubmit(event){
  //   event.preventDefault()
  //   console.log(name, email, message)  
  // }
  
  return (
    <StyledContact>
      <div className="container">
        <header className="banner-header">
          {/* <figure onClick = { () => router.back()}><ArrowBackIcon fontSize="small"/></figure> */}
          <p>GET IN TOUCH</p>
        </header>

        <main className="main-content">
          <aside className="message-form">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <legend>Send us message</legend>
              <input type="text" name="sender_name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" name="sender_email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)}>
              </textarea>              
              <button type="submit">Send Message</button>
            </form>
          </aside>

          <aside className="contact-info">
            <section>
                {/* <header className="contact-header">Contact Info</header> */}
                <span className="socials-address">
                    {/* <address>
                        <PlaceIcon fontSize="medium"/> Block D2 APDC Capital Estate, Kaba District Opp. Brick City Estate, Along 
                          Kubwa Expressway, Abuja
                    </address> */}

                    <header className="contact-header socials">Call or Follow us</header>
                    <span className="socials">
                    
                      <a href="tel:08034477604"><CallIcon fontSize="small" /></a>
                      <a href="https://mobile.twitter.com/smart_earners"><TwitterIcon fontSize="small" /></a>
                      <a href="https://www.instagram.com/teamsmartearners"><InstagramIcon fontSize="small" /></a>
                      <a href="#"><WhatsAppIcon fontSize="small" /></a>
                      <a href="#"><FacebookIcon fontSize="small" /></a>
                      <a href="https://t.me/OfficialSmartEarners"><Telegram fontSize="small"/></a>
                    </span>
                    
                </span>
            </section>
          </aside>
        </main>

      </div>
    </StyledContact>
  )
}

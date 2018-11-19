import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Container from '../components/container'
import '../styles/contact.css'

const ContactPage = () => (
  <Layout>
    <Nav />

    <Container>
      <div id="contactForm">
        <div className="inner">
          <div>
            <form
              name="contact"
              method="post"
              action="/success"
              netlify-honeypot="bot-field"
              netlify="true"
            >
              <input type="hidden" name="bot-field" />

              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" required />
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                  />
                </li>
                <li id="clear">
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
)
export default ContactPage

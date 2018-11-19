import React from 'react'
import Container from '../components/container'
import Nav from '../components/Nav'
import Layout from '../components/layout'
import '../styles/stylesheet.css'

const passTalk = props => (
  <Layout>
    <Nav />

    <Container>
      <h1>Pass Talks</h1>

      <div class="user">
        <h2 class="username">John Doe - Coda</h2>
        <a href="https://panic.com/coda/" className="pass-talk-links">
          panic.com/coda
        </a>
        <p class="excerpt">
          John researched Coda. Discussing what Coda is, programming language it
          uses, companies that use, and examples.
        </p>
      </div>

      <div class="user">
        <h2 class="username">Bob Smith - Rust</h2>
        <a href="https://www.rust-lang.org/en-US/" className="pass-talk-links">
          www.rust-lang.org
        </a>
        <p class="excerpt">
          Bob researched Rust, discussing what Rust was, programming languages
          it uses, companies that use it, and examples.
        </p>
      </div>
      <div class="user">
        <h2 class="username">Jane Doe - Amanzon AWS</h2>
        <a
          href="https://aws.amazon.com/free/?trk=ps_a131L000005OQL7QAO&trkCampaign=UK&sc_channel=PS&sc_campaign=acquisition_UK&sc_publisher=Google&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core|Core|UK|EN|Text&sc_content=Brand_Core_HV_e&sc_detail=aws&sc_category=Core&sc_segment=293614524183&sc_matchtype=e&sc_country=UK&s_kwcid=AL!4422!3!293614524183!e!!g!!aws&ef_id=CjwKCAiArK_fBRABEiwA0gOOc7aljFNoVJZmi9hthtBQpnmFRfS4swYn7Ma3DZcCcKadc-5u7IiyLBoCzacQAvD_BwE:G:s"
          className="pass-talk-links"
        >
          Amazon Web Service
        </a>
        <p class="excerpt">
          Jane from Sauce researched Amanzon AWS, explaining what Amazon was,
          different features, process that can be taken, capabilities, companies
          that use it, and examples.
        </p>
      </div>
      <div class="user">
        <h2 class="username">John Smith - Code4000</h2>
        <a href="https://www.code4000.org/en" className="pass-talk-links">
          code4000.org
        </a>
        <p class="excerpt">
          John Smith was from Code4000, which is an organisation that bring in
          developers to spend some time face-to-face or via a messager to help
          convicts develop programming skills as well as giving them actual
          projects to work on.
        </p>
      </div>
      <div class="user">
        <h2 class="username">Mike Smith - Parrel Processing</h2>
        <a href="http://www.lambdafunctions.com/" className="pass-talk-links">
          lambdafunctions.com
        </a>
        <p class="excerpt">
          Mike discussed Parrel Processing, definition, the problems, causes, as
          well as in-depth into Data races being the main and common problem,
          and tips / demonstations of how to avoid causing a data race.
        </p>
      </div>
      <div class="user">
        <h2 class="username">Amalia - Management Software</h2>
        <a href="https://asimpledesign.co.uk/" className="pass-talk-links">
          asimpledesign.co.uk
        </a>
        <p class="excerpt">
          Amalia discussed Management Software Applications (MSA), problems with
          them for new businesses, how effective making your own can be, and
          example of her own created MSA.
        </p>
      </div>
      <div class="user">
        <h2 class="username">Matt - Redux</h2>
        <a href="https://redux.js.org/" className="pass-talk-links">
          redux.js.org
        </a>
        <p class="excerpt">
          Matt discussed Redux, what it is, what you can do with Redux,
          programming languages it uses, breaking down the key concepts, and
          examples of the key concepts of Redux.
        </p>
      </div>
      <div class="user">
        <h2 class="username">Harry - Nasa Space App Winner</h2>
        <a
          href="http://www.c4di.co.uk/space-apps-teams/2018/10/20/hull-css-uni-of-hull-computer-science-society"
          className="pass-talk-links"
        >
          Hull CSS
        </a>
        <p class="excerpt">
          Harry is part of the team Hull CSS (Computer Science Society) and his
          team won the Nasa Space App Hack-a-thon, with an application that
          pulls in information about space launches on a 3D Globe with also the
          accessiblity of VR (Virtual Reality).
        </p>
      </div>
      <div class="user">
        <h2 class="username">Dave Carr - The One Point</h2>
        <a href="https://theonepoint.co.uk/" className="pass-talk-links">
          theonepoint.co.uk
        </a>
        <p class="excerpt">
          Dave from The One Point talked about a Graph API he developed that
          links into most of the Microsoft Applications, and works as a Task
          Management Application.
        </p>
      </div>
    </Container>
  </Layout>
)
export default passTalk

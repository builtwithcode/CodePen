import React from 'react'
import Container from '../components/container'
import Nav from '../components/Nav'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import './stylesheet.css'

const passTalkPage = (props) => (

<Layout>
<Nav />
    
<Container>
      <h1>Pass Talks</h1>
      <div class="user">
      <h2 class="username">John Doe - Coda</h2> 
      <Img fluid={props.data.imageCoda.childImageSharp.fluid} className="img" />
      <p class="excerpt">John researched Coda. Discussing what Coda is, programming language it uses, companies that use, and examples.</p>
      </div>
  
      <div class="user">
      <h2 class="username">Bob Smith - Rust</h2>
      <Img fluid={props.data.imageRust.childImageSharp.fluid} className="img" />
      <p class="excerpt">Bob researched Rust, discussing what Rust was, programming languages it uses, companies that use it, and examples.</p>
      </div>
      <div class="user">
      <h2 class="username">Jane Doe - Amanzon AWS</h2>
      <Img fluid={props.data.imageAWS.childImageSharp.fluid} className="img-aws" />
      <p class="excerpt">Jane from Sauce researched Amanzon AWS, explaining what Amazon was, different features, process that can be taken, capabilities, companies that use it, and examples.</p>
      </div>
      <div class="user">
      <h2 class="username">John Smith - Code4000</h2>
      <Img fluid={props.data.imageCode.childImageSharp.fluid} className="img" />
      <p class="excerpt">John Smith was from Code4000, which is an organisation that bring in developers to spend some time face-to-face or via a messager to help convicts develop programming skills as well as giving them actual projects to work on.</p>
      </div>
    </Container>

    </Layout>
)
    export default passTalkPage

    export const fluidImage = graphql`
fragment fluidImage1 on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageCoda: file(relativePath: { eq: "coda.png" }) {
      ...fluidImage1
    }
    imageRust: file(relativePath: { eq: "rust.png" }) {
      ...fluidImage1
    }
    imageAWS: file(relativePath: { eq: "aws.png" }) {
      ...fluidImage1
    }
    imageCode: file(relativePath: { eq: "code4000.jpeg" }) {
      ...fluidImage1
    }
}
`
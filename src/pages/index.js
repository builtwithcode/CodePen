import React from 'react'
import { Link } from 'gatsby'
import Container from '../components/container'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import styled from 'styled-components'
import Carousel from '../components/carousel'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import './stylesheet.css'

const Item = styled.div`
  text-align: center;
  padding: 50px;
`


const IndexPage = (props) => (

  
  <Layout>
    <Nav />
    <div id="banner">
      <h1 id="banner-h1">Next Meet-Up</h1>
      <p id="banner-p">Monday 12th November.</p>
        <div className="buttons">
      <Link to="/learnMore/">
        <article id="learnMore">Learn More!</article>
      </Link>
      <a href="https://www.eventbrite.co.uk/e/codepen-hull-concurrency-coding-for-parallel-processing-tickets-51658640384?aff=erelexpmlt">
        <article id="bookNow">Book Now!</article>
      </a>
        </div>
    </div>
    <div>
      <h1 id="location-h1">Where?</h1>
      <p class="location-p">C4DI @TheDock </p>
      <p class="location-p">31-38 Queen Street, </p>
      <p class="location-p">Hull, </p>
      <p class="location-p">HU1 1UU</p>
    </div>
   <Container>
    <Carousel
          title="Pass Talks"
        >
          <Item>
      <div class="user">
      <h2 class="username">John Doe - Coda</h2> 
      <Img fluid={props.data.imageCoda.childImageSharp.fluid} className="img" />
      <p class="excerpt">John researched Coda. Discussing what Coda is, programming language it uses, companies that use, and examples.</p>
      </div>
      </Item>
          <Item>
          <div class="user">
          <h2 class="username">Bob Smith - Rust</h2>
          <Img fluid={props.data.imageRust.childImageSharp.fluid} className="img" />
          <p class="excerpt">Bob researched Rust, discussing what Rust was, programming languages it uses, companies that use it, and examples.</p>
          </div>
            </Item>
          <Item>
          <div class="user">
      <h2 class="username">Jane Doe - Amanzon AWS</h2>
      <Img fluid={props.data.imageAWS.childImageSharp.fluid} className="img-aws" />
      <p class="excerpt">Jane from Sauce researched Amanzon AWS, explaining what Amazon Web Service was, different features, process that can be taken, capabilities, companies that use it, and examples.</p>
      </div>
      </Item>
          <Item>
          <div class="user">
      <h2 class="username">John Smith - Code4000</h2>
      <Img fluid={props.data.imageCode.childImageSharp.fluid} className="img" />
      <p class="excerpt">John Smith was from Code4000, which is an organisation that bring in developers to spend some time face-to-face or via a messager to help convicts develop programming skills as well as giving them actual projects to work on.</p>
      </div>
      </Item>
        </Carousel>
    </Container>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
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
      ...fluidImage
    }
    imageRust: file(relativePath: { eq: "rust.png" }) {
      ...fluidImage
    }
    imageAWS: file(relativePath: { eq: "aws.png" }) {
      ...fluidImage
    }
    imageCode: file(relativePath: { eq: "code4000.jpeg" }) {
      ...fluidImage
    }
}
`
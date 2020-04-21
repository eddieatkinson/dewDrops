import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

class Contact extends Component {
  render() {
    const siteTitle = "Dewdrops Counseling"
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        showHeader={false}
      >
        <Wrapper>
          <div>Contact page</div>
        </Wrapper>
      </Layout>
    )
  }
}

const Wrapper = styled.div`
  display: block;
  margin: 1rem auto;
  width: 85%;
  line-height: 1.2rem;
  @media screen and (min-width: 600px) {
    width: 60%;
    line-height: 1.8rem;
  }
`

const Paragraph = styled.p`
  margin: 1rem 0;
  color: rgba(0, 0, 0, 0.6666666666666666);
  text-align: center;
  font-family: Times, serif;
  font-size: 1rem;
  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`

const Image = styled.img`
  display: block;
  margin: auto;
  width: 90%;
  margin-bottom: 0.3rem;
`

export default Contact

import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

class IndexPage extends Component {
  render() {
    const siteTitle = "Dewdrops Counseling"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`Tampa`, `counseling`, `mental health`, `Gwenny`]}
        />
        <Hr />
        <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/VgFd0hOBTfKL6W?quality=3840&amp;allowAnimation=true" />
      </Layout>
    )
  }
}

const Hr = styled.hr`
  /* margin: 2rem 20rem; */
`

const Image = styled.img`
  /* padding: 0 5rem; */
  max-width: 100%;
`

export default IndexPage

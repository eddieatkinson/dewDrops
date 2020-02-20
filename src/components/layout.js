import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class Layout extends Component {
  render() {
    const { title, children } = this.props

    return (
      <Wrapper>
        <Header>
          <img
            src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/t7L1QlOYA5zBQN?quality=3840&amp;allowAnimation=true"
            alt="dewdrop"
          />
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={"/"}
          >
            {/* {title} */}
          </Link>
        </Header>
        <div
          style={{
            margin: "auto",
            padding: "2rem 10rem",
          }}
        >
          <main>{children}</main>
        </div>
        <Footer>© {new Date().getFullYear()}, Built for Gwenny</Footer>
      </Wrapper>
    )
  }
}

const Header = styled.div`
  text-align: center;
  color: white;
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  padding: 3rem;
  text-align: center;
  background: #dcdcdc;
`

export default Layout

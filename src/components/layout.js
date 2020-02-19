import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class Layout extends Component {
  render() {
    const { title, children } = this.props

    return (
      <Wrapper>
        <Header>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={"/"}
          >
            {title}
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
  padding: 3rem;
  text-align: center;
  color: white;
  background: green;
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

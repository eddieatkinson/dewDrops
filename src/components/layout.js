import React, { Component } from "react"
import styled from "styled-components"

class Layout extends Component {
  render() {
    const { title, children } = this.props

    return (
      <Wrapper>
        <Header>
          <Title>Dewdrop Counseling</Title>
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
  background-image: url("https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/t7L1QlOYA5zBQN?quality=3840&amp;allowAnimation=true");
  position: relative;
  color: white;
  background-size: cover;
  height: 100vh;
`

const Title = styled.div`
  position: absolute;
  font-size: 8vw;
  text-align: center;
  width: 100%;
  bottom: 2vw;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 600px) {
    font-size: 5vw;
  }
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

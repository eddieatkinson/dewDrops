import React, { Component } from "react"
import styled from "styled-components"

class Layout extends Component {
  state = {
    currentScrollHeight: 0,
  }
  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 10) * 10
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({
          currentScrollHeight: newScrollHeight,
        })
      }
    }
  }
  render() {
    const { title, children } = this.props
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)

    return (
      <Wrapper>
        <Header>
          <Title style={{ opacity }}>Dewdrop Counseling</Title>
        </Header>
        <div
          style={{
            margin: "auto",
            // padding: "2rem 10rem",
          }}
        >
          <main>{children}</main>
        </div>
        <Footer>© {new Date().getFullYear()}, Dewdrop Counseling</Footer>
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
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  font-size: 8vw;
  text-align: center;
  width: 100%;
  bottom: 8vw;
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

import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"
import scrollTo from "gatsby-plugin-smoothscroll"

class Layout extends Component {
  state = {
    currentScrollHeight: 0,
    isMenuOpen: false,
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

  renderHeader() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)
    const headerStuff = (
      <Header>
        <Title style={{ opacity }}>Dewdrop Counseling</Title>
      </Header>
    )
    return headerStuff
  }

  handleHamburgerClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }
  displayHamburger() {
    return (
      <HamburgerWrapper>
        <HamburgerMenu
          isOpen={this.state.isMenuOpen}
          menuClicked={this.handleHamburgerClick.bind(this)}
          // width={18}
          // height={15}
          color="white"
          // animationDuration={0.5}
        />
      </HamburgerWrapper>
    )
  }

  displayNavbar() {
    return (
      <NavbarWrapper>
        <HeaderButton onClick={() => scrollTo("#aboutMe")}>
          About Me
        </HeaderButton>
        <HeaderButton onClick={() => scrollTo("#approach")}>
          Approach
        </HeaderButton>
        <HeaderButton onClick={() => scrollTo("#services")}>
          Services
        </HeaderButton>
        <HeaderButton onClick={() => scrollTo("#contactMe")}>
          Contact Me
        </HeaderButton>
        <HeaderButton
          href="https://dewdropcounseling.wordpress.com/"
          target="_blank"
        >
          Blog
        </HeaderButton>
      </NavbarWrapper>
    )
  }

  displayMobileMenu() {
    return (
      <HamburgerDropdown>
        <li>
          <HeaderButton onClick={() => scrollTo("#aboutMe")}>
            About Me
          </HeaderButton>
        </li>
        <li>
          <HeaderButton onClick={() => scrollTo("#approach")}>
            Approach
          </HeaderButton>
        </li>
        <li>
          <HeaderButton onClick={() => scrollTo("#services")}>
            Services
          </HeaderButton>
        </li>
        <li>
          <HeaderButton onClick={() => scrollTo("#contactMe")}>
            Contact Me
          </HeaderButton>
        </li>
        <li>
          <HeaderButton
            href="https://dewdropcounseling.wordpress.com/"
            target="_blank"
          >
            Blog
          </HeaderButton>
        </li>
      </HamburgerDropdown>
    )
  }

  render() {
    const { title, children } = this.props
    const ListLink = props => (
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
      </li>
    )
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)

    return (
      <Wrapper>
        <Menu>
          {this.state.isMenuOpen ? this.displayMobileMenu() : null}
          {this.displayHamburger()}
          {this.displayNavbar()}
        </Menu>
        <Header>
          <Title style={{ opacity }}>Dewdrop Counseling</Title>
        </Header>
        <div
          style={{
            margin: "auto",
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
  background-image: url("./assets/dewdrop.png");
  position: relative;
  color: white;
  background-size: cover;
  height: 100vh;
`

const Menu = styled.div`
  text-align: right;
  padding: 1rem;
  position: absolute;
  width: 100vw;
  z-index: 2;
`

const HeaderButton = styled.a`
  color: #ffffffff;
  cursor: pointer;
  box-shadow: none;
  text-decoration: none;
  margin: 3rem;
  &:hover {
    color: #ffffffaa;
  }
`

const Title = styled.div`
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  font-size: 8vw;
  text-align: center;
  width: 100%;
  bottom: 16vw;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 600px) {
    font-size: 5vw;
    bottom: 4vw;
  }
`

const HamburgerWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`
const NavbarWrapper = styled.div`
  @media screen and (max-width: 1199px) {
    display: none;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`

const Footer = styled.footer`
  padding: 3rem;
  text-align: center;
  background: #3cb371;
`

const HamburgerDropdown = styled.ul`
  position: absolute;
  list-style-type: none;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`

export default Layout

import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

class IndexPage extends Component {
  render() {
    const siteTitle = "Dewdrops Counseling"

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        showHeader={true}
      >
        <SEO
          title="Home"
          keywords={[`Tampa`, `counseling`, `mental health`, `Gwenny`]}
        />
        <Wrapper>
          {/* <Paragraph>
            <br />
            <br />
            _______
            <br />
            <br />
            <br />
          </Paragraph> */}
          <Intro>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <br />
            <br />
            <br /> */}
            <Paragraph>
              Why Dewdrop? Being a Floridian and a runner, I have a great
              appreciation for the outdoors. Waking up early to run before the
              heat sets in, I'm able to watch the glistening of the dewdrops
              soon after the sun rises. Something about the dewdrops, though,
              they don't last long. They are a perfect beautiful individual
              droplet, but how quickly they dissipate with the slightest touch
              or change in temperature. The moments with the dewdrops are so
              brief they are missed. Isn't this like life? In our haste to get
              through each day, hurrying from place to place, rushing through
              the bad parts and overlooking the mundane, we miss out on precious
              and potentially meaningful moments. Let's work together to learn
              to slow down and experience the dewdrops we're given every day.
            </Paragraph>
          </Intro>
          <About id="aboutMe">
            <SectionHeader>About Me</SectionHeader>
            <Image src="./assets/gwenny.png" />
            <Paragraph>
              Hello and welcome! I am a licensed mental health counselor and
              certified addictions professional in Florida with experience as a
              counselor, clinical supervisor, and agency director. My experience
              is in addictions, anxiety, depression, stress management, grief,
              trauma, and career development. I enjoy working with people who
              are experiencing life transitions such as graduation, career
              changes, retirement, new marriage, new baby, empty nest, illness
              or injury, divorce, or grief. However, I prefer to look at the
              whole picture as opposed to one specific issue. I focus on overall
              wellness, which includes tuning into all the different areas of
              life and looking for patterns that may have resulted in seeking
              counseling
              <br />
              <br />
              <br />
              <span style={{ fontSize: "2.5rem" }}>
                Gwendolyn Green, LMHC MCAP
              </span>
              <br />
              <span style={{ fontSize: "1rem" }}>
                B.S. Psychology, University of Florida
                <br />
                M.A. Rehabilitation and Mental Health Counseling, University of
                South Florida <br />
                Graduate Certificate in Nonprofit Leadership, University of
                South Florida <br />
                Licensed Mental Health Counselor, MH10951 <br />
                Master’s Level Certified Addictions Professional MCAP100330
                <br />
                Qualified Supervisor for State Registered Mental Health Interns
              </span>
            </Paragraph>
          </About>
          <Approach id="approach">
            <SectionHeader>Approach</SectionHeader>
            <Paragraph>
              If you’ve had counseling before, every counselor is different and
              if this is your first time seeking out counseling, you might have
              some ideas of what’s supposed to happen. I want to make sure we’re
              on the same page about what will happen and what won’t happen. I’m
              here to listen and help you, but there is no magic solution to
              make everything better. Sometimes things will become more
              uncomfortable before they start to feel better. One of my favorite
              quotes is, “The only way out is through”. But remember that you
              aren’t going through it alone. I’ll be here with you. I’ll do my
              best to ask the right questions and highlight important things you
              say so you can think about it, but please remember that you’ll be
              the one doing most of the work. You can think of me as something
              like an Uber driver without a navigation system; I’m here to help
              you get where you’d like to go, but you have to be the one to tell
              me where that is and we have to work together to make sure you
              make it there. Maybe it’s a short journey and you know where you
              want to go but just need assistance in getting there, or maybe
              it’s a longer destination and you aren’t exactly sure yet where
              you’d like to end or which route to take. Regardless of what you
              want your journey to look like, know that it will be a journey we
              will be on together and I look forward to being there with you.
              <br />
              <br /> I use a combination of treatment methods to help you
              achieve your goals including CBT, Solution Focused, Narrative,
              Existential, and Motivational Interviewing.
            </Paragraph>
          </Approach>
          <Services id="services">
            <SectionHeader>Services</SectionHeader>
            <ServicesContent>
              <span style={{ fontWeight: "bold" }}>
                Individual Sessions (In person or Telehealth)
              </span>
              <br /> Individual Counseling Sessions: $100/50 Minute Session
              <br />
              Students, Teachers, Healthcare Workers, First Responders,
              Veterans: $60/50 Minute Session <br />
              <span style={{ fontWeight: "bold" }}>
                Qualified Supervision for State Registered Mental Health Interns
              </span>
              <br />
              Individual Supervision: $50/Hour <br />
              Group Supervision: $30/Hour
            </ServicesContent>
            <SectionHeader id="contactMe">Contact Me</SectionHeader>
          </Services>
        </Wrapper>
      </Layout>
    )
  }
}

const Wrapper = styled.div`
  display: block;
  /* margin: 1rem auto; */
  /* width: 85%; */
  line-height: 1.2rem;
  @media screen and (min-width: 600px) {
    /* width: 60%; */
    line-height: 1.8rem;
  }
`

const Intro = styled.div`
  position: relative;
  background-image: url("./assets/sunnyField.png");
  background-size: cover;
  /* height: 100vh; */
`
const About = styled.div`
  position: relative;
  background-image: url("./assets/ladyBug.png");
  background-size: cover;
  /* height: 100vh; */
`
const Approach = styled.div`
  position: relative;
  background-image: url("./assets/closeDew.png");
  background-size: cover;
  /* height: 100vh; */
`

const Services = styled.div`
  /* position: relative; */
  background-image: url("./assets/field.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
`

// const Services = styled.p`
//   color: white;
//   text-align: right;
//   float: right;
//   width: 70%;
//   margin: 1rem;
//   font-size: 1rem;
// `

const ServicesContent = styled.p`
  /* position: absolute; */
  margin: 0 1rem;
  margin-left: auto;
  padding: 4rem 0;
  color: white;
  text-align: right;
  justify-content: flex-end;
  width: 70%;
  font-family: Times, serif;
  font-size: 1rem;
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

const SectionHeader = styled.div`
  /* background-image: linear-gradient(green, black); */
  background-color: #3cb37177;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  /* height: 3rem; */
`

const Paragraph = styled.p`
  /* position: absolute; */
  margin: 0 1rem;
  padding: 4rem 0;
  color: white;
  text-align: center;
  font-family: Times, serif;
  font-size: 1rem;
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

const Image = styled.img`
  margin: 1rem;
  display: block;
`

export default IndexPage

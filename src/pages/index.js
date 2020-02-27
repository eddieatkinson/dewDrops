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
        <Wrapper>
          <Paragraph>
            <br />
            <br />
            _______
            <br />
            <br />
            <br />
          </Paragraph>
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/VgFd0hOBTfKL6W?quality=3840&amp;allowAnimation=true" />
          <Paragraph>
            Hello! I am a licensed mental health counselor and certified
            addictions professional in Florida with 14 years of experience as a
            counselor, clinical supervisor, and agency director. My experience
            is in addictions, anxiety, depression, stress management, grief,
            trauma, and career development. I tend to build a strong connection
            with people who are experiencing life changes such as career
            changes, retirement, empty nest, new parent, illness or injury,
            divorce, or grief. However, I prefer to look at the whole picture as
            opposed to one specific issue. I focus on overall wellness, which
            includes tuning into all the different areas of life and looking for
            patterns that may have resulted in seeking a counselor.
          </Paragraph>
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/QhOW7UP4bgn04z?quality=791&amp;allowAnimation=true" />
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/WEsFZ2ruPIfacQ?quality=830&amp;allowAnimation=true" />
          <Paragraph>
            Man’s life is like a drop of dew on a leaf.
            <br />
            <br /> ~Socrates
            <br />
            <br /> Let your life lightly dance on the edges of Time like dew on
            the tip of a life.
            <br />
            <br /> ~Rabindranath Tagore
          </Paragraph>
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/YAGX95DuW3jGSn?quality=960&amp;allowAnimation=true" />
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/EGGP78rlA3dgSW?quality=960&amp;allowAnimation=true" />
          <Paragraph>
            <span style={{ fontWeight: "bold" }}>Services:</span>
            <br />
            Individual Counseling Sessions, $100 per hour. In-Network for for
            Cigna Health and BetterHelp.
            <br />
            <br />
            Supervision for Registered Mental Health Interns, $50 per hour.
          </Paragraph>
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/N10OkLiH2OVodn?quality=960&amp;allowAnimation=true" />
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/vmatMgLpxFneEs?quality=940&amp;allowAnimation=true" />
          <Paragraph>
            Why Dewdrop? Being a Floridian and a runner, I have a great
            appreciation for the outdoors. Waking up early to run before the
            heat sets in, I'm able to watch the glistening of the dewdrops soon
            after the sun rises. Something about the dewdrops, though, they
            don't last long. They are a perfect beautiful individual droplet,
            but how quickly they dissipate with the slightest touch or change in
            temperature. The moments with the dewdrops are so brief they are
            missed. Isn't this like life? In our haste to get through each day,
            hurrying from place to place, rushing through the bad parts and
            overlooking the mundane, we miss out on precious and potentially
            meaningful moments. Let's work together to learn to slow down and
            experience the dewdrops we're given every day.
          </Paragraph>
          <Image src="https://eus-www.sway-cdn.com/s/NUaBApAt1Edq4cLg/images/U3iVIoUj6ZmalU?quality=736&amp;allowAnimation=true" />
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

export default IndexPage

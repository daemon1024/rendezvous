import styled from "styled-components";

const About = styled.article`
  margin: 0 auto;
  max-width: 650px;
`;

const AboutPage = () => (
  <About>
    <h1>Rendezvous : OSDC Meetups</h1>
    <p>
      Frontend for the{" "}
      <a href="https://github.com/osdc/ct-api/">Community Tools API</a> which
      simplifies and automates the various things happening around the{" "}
      <a href="https://osdc.netlify.app/">Open Source Developers Community</a>
    </p>
  </About>
);

export default AboutPage;

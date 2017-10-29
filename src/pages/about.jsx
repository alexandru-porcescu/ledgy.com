// @flow

import React from 'react';
import Img from 'gatsby-image';

import aboutUs from '../assets/img/about-us.jpg';

const Header = () => (
  <header className="header header-inverse" style={{ backgroundColor: '#00b38d' }}>
    <div className="container text-center">

      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">

          <h1>About Us</h1>
          <p className="fs-20 opacity-70">Find out about our mission and meet our team and advisors</p>

        </div>
      </div>

    </div>
  </header>
);

type ProfileProps = {
  name: string,
  func: string,
  description: string,
  img: Object,
}
type FounderProps = {
  ...$Exact<ProfileProps>,
  twitterlink: string,
  linkedinlink: string,
}

const Founder = ({ name, func, description, img, twitterlink, linkedinlink }: FounderProps) => (
  <div className="col-12 col-md-6 col-lg-4 team-1">
    {img && <Img {...img} alt={name} />}
    <h6>{name} <small>{func}</small></h6>
    <p>{description}</p>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-twitter" href={twitterlink}><i className="fa fa-twitter" /></a>
      <a className="social-linkedin" href={linkedinlink}><i className="fa fa-linkedin" /></a>
    </div>
  </div>
);

const Investor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-4 team-2">
    {img && <Img {...img} alt={name} />}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);


const Advisor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-6 team-2">
    {img && <Img {...img} alt={name} />}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);

const IndexPage = ({ data }: Object) => (
  <div>
    <Header />
    <main className="main-content">
      <section className="section py-150 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pl-50 pr-80">
              <h2>Our Mission</h2>
              <p className="lead">Energistically transform pandemic manufactured products whereas premier solutions. Compellingly streamline an expanded array of web-readiness rather.</p>
              <br />
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Deliver a high quality web design</span>
              </p>
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Support our customers once signing a contract</span>
              </p>
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Streamline an expanded array of web</span>
              </p>
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Pursue web-enabled niche markets with professionals</span>
              </p>
            </div>
            <div className="col-lg-6 hidden-md-down align-self-center">
              <img className="shadow-3 aos-init aos-animate" src={aboutUs} alt="..." data-aos="fade-left" data-aos-duration="1500" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>Team</small>
            <h2>Who we are</h2>
            <hr />
            <p className="lead">Meet out small team that make those great products.</p>
          </header>


          <div className="row gap-y">
            <Founder
              name="Timo Horstschaefer"
              func=""
              description=""
              twitterlink=""
              linkedinlink=""
              img={data.timo}
            />
            <Founder
              name="Ben-Elias Brandt"
              func=""
              description=""
              twitterlink=""
              linkedinlink=""
              img={data.ben}
            />
            <Founder
              name="Yoko Spirig"
              func=""
              description=""
              twitterlink=""
              linkedinlink=""
              img={data.yoko}
            />
          </div>

        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <header className="section-header">
            <small>Investors</small>
            <h2>Backed by leading investors from Switzerland</h2>
            <hr />
            <p className="lead">Meet the team working to make customer support simpler for you.</p>
          </header>


          <div className="row gap-y">
            <Investor
              name="Myke Naef"
              func=""
              description=""
              img={data.myke}
            />
            <Investor
              name="Paul E. Sevinc"
              func=""
              description=""
              img={data.paul}
            />
            <Investor
              name="Luzius Meisser"
              func=""
              description=""
              img={data.luzius}
            />
          </div>

          <div className="row gap-y col-12 col-md-10 offset-md-1">
            <Advisor
              name="Adrian Buehrer"
              func=""
              description=""
              img={data.adrian}
            />
            <Advisor
              name="Elena Walder-Schiavone"
              func=""
              description=""
              img={data.elena}
            />
          </div>


        </div>
      </section>
    </main>
  </div>
);

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
    ben: imageSharp(id: { regex: "/ben.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    yoko: imageSharp(id: { regex: "/yoko.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    timo: imageSharp(id: { regex: "/timo.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }


    myke: imageSharp(id: { regex: "/myke.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    paul: imageSharp(id: { regex: "/paul.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    luzius: imageSharp(id: { regex: "/luzius.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    adrian: imageSharp(id: { regex: "/adrian.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    elena: imageSharp(id: { regex: "/elena.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;

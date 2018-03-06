// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';


import References from './References';
import Features from './Features';
import Subscribe from './Subscribe';

const Header = ({ i18n }: Props) => (
  <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundColor: '#20a8d8' }} id="start">

    <div className="container text-center">

      <div className="row h-full">
        <div className="col-12 col-lg-10 offset-lg-1 align-self-center">

          <h1 className="display-2"><Trans id="site.title" /></h1>
          <br />
          <p className="fs-20 w-400 mx-auto hidden-sm-down">
            <Trans id="site.description" />
          </p>
          <p className="fs-18 w-250 mx-auto hidden-md-up">
            <Trans id="site.description" />
          </p>

          <div className="col-10 offset-1">

            <form className="form-glass row" action="https://app.ledgy.com/signup" method="get">
              <div className="col-12 col-md-7 my-1">
                <input type="text" name="email" className="form-control form-control-lg" placeholder={i18n.t`Enter email …`} />
              </div>
              <div className="col-12 col-md-5 my-1">
                <button style={{ height: '100%' }} className="btn btn-block btn-lg btn-success"><Trans>Try for free</Trans></button>
              </div>
            </form>
            <div className="row mt-2 pr-3 float-right">
              <a
                style={{ textDecoration: 'underline' }}
                className="text-white"
                href="https://demo.ledgy.com"
              ><Trans>Check out our demo app</Trans>
              </a>
            </div>

          </div>
        </div>

        <div className="col-12 align-self-end text-center">
          <a className="scroll-down-3 scroll-down-inverse" href="#testimonials" data-scrollto="testimonials"><span /></a>
        </div>

      </div>

    </div>
  </header>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">

      <References {...props} />
      <Pricing {...props} />
      <Features {...props} />


      <section id="demo" className="section section-inverse" style={{ backgroundColor: '#60ae50' }} >

        <header className="section-header mb-40">
          <small><Trans>Demo</Trans></small>
        </header>

        <div className="text-center">
          <a className="btn btn-lg btn-success" href="https://demo.ledgy.com"><Trans>Check out our demo app</Trans></a>
        </div>

      </section>


      <Future {...props} />
      <Subscribe {...props} />

    </main>
  </div>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const indexPageFragment = graphql`
  fragment IndexPageFragment on RootQueryType {
    feature1: imageSharp(id: { regex: "/src\/img\/feature-1.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature2: imageSharp(id: { regex: "/src\/img\/feature-2.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature3: imageSharp(id: { regex: "/src\/img\/feature-3.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }

    testingtime: imageSharp(id: { regex: "/testingtime/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    quitt: imageSharp(id: { regex: "/quitt/" }) {
      resolutions(width: 80) { ...GatsbyImageSharpResolutions }
    }
    cryptofund: imageSharp(id: { regex: "/cryptofund/" }) {
      resolutions(width: 180) { ...GatsbyImageSharpResolutions }
    }
    sherpany: imageSharp(id: { regex: "/sherpany/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    frontify: imageSharp(id: { regex: "/frontify/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    apiax: imageSharp(id: { regex: "/apiax/" }) {
      resolutions(width: 110) { ...GatsbyImageSharpResolutions }
    }
    allthings: imageSharp(id: { regex: "/allthings/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    farmy: imageSharp(id: { regex: "/farmy/" }) {
      resolutions(width: 130) { ...GatsbyImageSharpResolutions }
    }
  }
`;

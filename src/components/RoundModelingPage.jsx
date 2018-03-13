// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { name } from '../constants';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Helmet>
      <title>{i18n.t`Round Modeling`} | {i18n.t`Features`} | {name}</title>
    </Helmet>
    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Financing Round Modeling</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2>Explore new scenarios for upcoming funding rounds interactively</h2>
              <p>
                <Trans>
                  Is your startup running well and you’re already thinking about
                  a new financing round to fuel your growth and take your
                  company to the next level?
                  You will find the round modeling tool directly on
                  the “Cap Table” page.
                  Enter a valuation and you will see how your convertibles apply
                  to your cap table immediately.
                  <br />
                  Add an investment and enter the value of the investment.
                  Watch in real-time how the new investment impacts your current
                  shareholder distribution.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up" data-aos-duration="500">
                <Img {...props.data.roundModelingSample} alt="Round Modeling" />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left">
              <p>
                Scroll down and you will notice that the cap table now
                indicates the “Round Modeling” mode.
                This gives you a detailed overview about who owns how many shares
                after applying the new financing round. Cool, eh?
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left" data-aos-duration="500">
                <Img {...props.data.roundModelingCaptable} alt="Cap table during round modeling" />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left mt-3">
              <h2>Share your scenarios</h2>
              <p>
                <Trans>
                  After you’re finished with modeling your financing round you can
                  download the scenario as a pdf document and share it with your co-founders,
                  friends and investors.
                  The documents includes the pre-money valuation of your company,
                  all investments and convertibles and the resulting cap table.
                  At the end you will also find valuable plots to visualize the new
                  development step of your company.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up-right" data-aos-duration="500">
                <Img {...props.data.roundModelingPdf} alt="PDF export of the financing round" />
              </div>
            </div>
          </div>

          <hr className="my-8" />


          <div className="row align-items-center">
            <div className="col-md-6 ml-auto">
              <h2><Trans>Convert to transactions</Trans></h2>
              <p>
                <Trans>
                  As soon as you’re done with your financing round, hit the “Convert” button.
                  This will transform the scenario into real transactions in your
                  share register and make it visible to all shareholders and investors.
                </Trans>
              </p>
            </div>

            <div className="col-md-5" data-aos="fade-right" data-aos-duration="500">
              <Img {...props.data.roundModelingConvert} alt="Convert financing round" />
            </div>
          </div>

          <FeatureLinks {...props} page="round-modeling" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment RoundModelingPageFragment on RootQueryType {
    ...FeaturesFragment

    roundModelingSample: imageSharp(id: { regex: "/round-modeling-sample.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingCaptable: imageSharp(id: { regex: "/round-modeling-captable.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingPdf: imageSharp(id: { regex: "/round-modeling-pdf.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingConvert: imageSharp(id: { regex: "/round-modeling-convert.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;

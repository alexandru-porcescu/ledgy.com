// @flow

import React from 'react';
import Img from 'gatsby-image';
import { LanguageHint } from '../components/Markdown';
import { trackSignupGoogleAnalytics } from '../layouts/utils';
import { ProductHuntButton } from './ProductHuntButton';
import { calculatorUrl, targetBlank } from '../helpers';

export const DefaultHeader = ({
  data,
  lang
}: {|
  lang: string,
  data: {| contentfulPage: Page, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { title, language } = data.contentfulPage;

  return (
    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>{title}</h1>
            <LanguageHint lang={lang} documentLang={language || 'en'} />
          </div>
        </div>
      </div>
    </header>
  );
};

export const CalculatorHeader = ({ data }: { data: any }) => {
  return (
    <header className="header bg-ledgy home-banner calculator-banner px-1 text-left">
      <div className="container">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6">
            <h1 className="text-white mb-2 mb-sm-3">
              This is the calculator you need if you’re raising capital
            </h1>
            <h5 className="text-white font-weight-light pb-4 mb-0">
              With this calculator you can:
            </h5>

            <div className="text-white banner-text">
              <ol>
                <li>
                  See <strong>who owns what</strong> after fundraising
                </li>
                <li>
                  Look more professional during <strong>term sheet negotiations</strong>
                </li>
                <li>
                  Understand common <strong>fundraising terms</strong>
                </li>
                <li>
                  Model your cap table through <strong>multiple funding rounds</strong>
                </li>
                <li>
                  Compare dilution results when adding <strong>convertible loans</strong> and
                  <strong> employee pools</strong>
                </li>
              </ol>
              <div className="pt-4">
                <a
                  className="btn btn-block d-sm-inline btn-xl my-2 mx-1 btn-round btn-light"
                  href={calculatorUrl}
                  onClick={() => trackSignupGoogleAnalytics('clickCalculator')}
                  {...targetBlank}
                >
                  Launch the Calculator
                </a>
                <ProductHuntButton
                  productHuntLink="https://www.producthunt.com/posts/startup-fundraising-calculator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
                  trackSignupKey="clickProductHunt"
                  postId="169181"
                  altText="Startup Fundraising Calculator - The calculator you need if you're raising money. | Product Hunt Embed"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="calculator" data-aos="fade-up">
              <Img {...data.calculator} alt="Financing Round Calculator" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

/* eslint-disable react/no-array-index-key */
// @flow

import React, { type Node } from 'react';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Title } from '../layouts/utils';
import { LEDGY_PLANS, appUrl, getCompanyFeaturePricing } from '../helpers';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';

const { STARTUP, SCALEUP, ENTERPRISE } = LEDGY_PLANS;
const featurePricing = getCompanyFeaturePricing();

const PricingCol = ({
  icon,
  name = '',
  price,
  children,
  textLeft = false,
  highlight = false
}: {
  icon?: Object,
  name?: string,
  price?: Node,
  children: Node,
  textLeft?: boolean,
  highlight?: boolean
}) => (
  <div
    className={`pricing-col ${textLeft ? 'text-left' : 'text-center'} ${
      highlight ? 'border-energetic-blue' : ''
    }`}
  >
    <div
      className={`pricing-plan ${name} p-1 d-flex flex-column justify-content-end align-items-center`}
    >
      {icon && name && price && (
        <>
          <Img {...icon} />
          <h3 className="py-2 mt-1">{name}</h3>
          <div className="text-wrap">{price}</div>
        </>
      )}
    </div>
    {children}
  </div>
);

const PricingColChildren = ({ prop }: { prop: boolean | Node }) => (
  <div className="d-block p-1">
    {(typeof prop !== 'boolean' && prop) ||
      (!prop && <FontAwesomeIcon icon={faTimes} className="text-muted" />) || (
        <FontAwesomeIcon icon={faCheck} className="text-success" />
      )}
  </div>
);

const PricingRow = ({
  children,
  mobileView = false,
  marginBottom = false
}: {
  children: Node,
  mobileView?: boolean,
  marginBottom?: boolean
}) => (
  <div
    className={`row text-nowrap ${mobileView ? 'd-flex d-lg-none' : 'd-none d-lg-flex'} ${
      marginBottom ? 'mb-4' : ''
    }`}
  >
    {children}
  </div>
);

const PricingCTA = ({ title, description }: {| title: Node, description: Node |}) => (
  <div className="col-12 col-lg-6 col-xl-4">
    <h5>{title}</h5>
    <p className="pb-5">{description}</p>
  </div>
);

export default withI18n()(({ i18n, data }: Props) => {
  const TextCol = ({ name = '' }: { name?: string }) => (
    <PricingCol textLeft name={name}>
      {featurePricing.map(({ text = true }, i) => (
        <PricingColChildren prop={text} key={i} />
      ))}
    </PricingCol>
  );

  const StartupCol = (
    <PricingCol icon={data.startupIcon} name={STARTUP} price={<Trans>Free</Trans>}>
      {featurePricing.map(({ startup = true }, i) => (
        <PricingColChildren prop={startup} key={i + 100} />
      ))}
      <Button outline inverted className="my-4" href={`${appUrl}/signup`}>
        <Trans>Sign up</Trans>
      </Button>
    </PricingCol>
  );

  const ScaleupCol = (
    <PricingCol
      icon={data.scaleupIcon}
      name={SCALEUP}
      price={<Trans>€2 / stakeholder / month</Trans>}
    >
      {featurePricing.map(({ scaleup = true }, i) => (
        <PricingColChildren prop={scaleup} key={i + 200} />
      ))}
      <Button className="my-4" href={`${appUrl}/signup`}>
        <Trans>Free trial</Trans>
      </Button>
    </PricingCol>
  );

  const EnterpriseCol = (
    <PricingCol
      highlight
      icon={data.enterpriseIcon}
      name={ENTERPRISE}
      price={<Trans>contact us</Trans>}
    >
      {featurePricing.map(({ enterprise = true }, i) => (
        <PricingColChildren prop={enterprise} key={i + 300} />
      ))}
      <Button className="my-4" href="mailto:contact@ledgy.com?subject=Enterprise plan inquiry">
        <Trans>Get in touch</Trans>
      </Button>
    </PricingCol>
  );
  const title = i18n.t`Pricing`;
  const description = i18n.t`Companies at different stages have very different needs. Consider access rights, storage, support needs, and more when selecting your ideal plan.`;
  return (
    <>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <div className="container">
        <PricingRow>
          <TextCol />
          {StartupCol}
          {ScaleupCol}
          {EnterpriseCol}
        </PricingRow>

        <PricingRow mobileView marginBottom>
          <TextCol name={STARTUP} />
          {StartupCol}
        </PricingRow>

        <PricingRow mobileView marginBottom>
          <TextCol name={SCALEUP} />
          {ScaleupCol}
        </PricingRow>

        <PricingRow mobileView>
          <TextCol name={ENTERPRISE} />
          {EnterpriseCol}
        </PricingRow>

        <div className="justify-content-center row gap-y" />

        <hr className="my-8" />
        <div className="row text-center justify-content-center my-7">
          <PricingCTA
            title={
              <>
                <Trans>Do you tackle the climate crisis?</Trans>{' '}
                <span role="img" aria-label="earth">
                  🌍
                </span>
              </>
            }
            description={
              <Trans>
                You get a 20% discount on Premium if your startup helps reduce carbon emissions.{' '}
                <a href="mailto:sales@ledgy.com?subject=Eco-Friendly Discount Application">
                  Tell us about your impact!
                </a>
              </Trans>
            }
          />
          <PricingCTA
            title={
              <>
                <Trans>Do you have less than €2m in funding?</Trans>{' '}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </>
            }
            description={
              <Trans>
                Only pay half the price during your first year on Ledgy.{' '}
                <a href="mailto:sales@ledgy.com?subject=Startup Discount Application">
                  Send us a message
                </a>{' '}
                and you’ll receive a discount.
              </Trans>
            }
          />
          <PricingCTA
            title={
              <>
                <Trans>Are you crowdfunded?</Trans>{' '}
                <span role="img" aria-label="unicorn">
                  🦄
                </span>
              </>
            }
            description={
              <Trans>
                Pay much less if you have many non-voting stakeholders on your cap table.{' '}
                <a href="mailto:sales@ledgy.com?subject=Crowdfunded Startup on Ledgy">Contact us</a>{' '}
                to get a quote.
              </Trans>
            }
          />
        </div>
      </div>
    </>
  );
});

export const pageQuery = graphql`
  query {
    startupIcon: imageSharp(fluid: { originalName: { regex: "/startup-icon.png/" } }) {
      fixed(height: 80) {
        ...GatsbyImageSharpFixed
      }
    }
    scaleupIcon: imageSharp(fluid: { originalName: { regex: "/scaleup-icon.png/" } }) {
      fixed(height: 115) {
        ...GatsbyImageSharpFixed
      }
    }
    enterpriseIcon: imageSharp(fluid: { originalName: { regex: "/enterprise-icon.png/" } }) {
      fixed(height: 180) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

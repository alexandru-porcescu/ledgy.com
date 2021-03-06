// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import { CircleBadge } from '../Badge';

const STEPS = [
  [1, <Trans>Upload the document</Trans>],
  [2, <Trans>Select signatories</Trans>],
  [3, <Trans>Send and receive valid signatures in a matter of seconds</Trans>]
];

export const SignaturesComingSoon = ({ data }: Object): Node => {
  return (
    <div id="signatories-coming-soon" className="row justify-content-between py-6">
      <div className="col-lg-5 text-center text-md-left d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0">
        <h6 className="w-100">
          <Trans>COMING SOON:</Trans>
        </h6>
        <h6 className="w-100">
          <Trans>Sign grants online in seconds</Trans>
        </h6>
        <div className="row row-small mx-auto text-left flex-column">
          {STEPS.map(([step, text]) => (
            <div className="d-flex align-items-start my-3" key={step}>
              <CircleBadge>{step}</CircleBadge>
              <div className="flex-1">
                <div>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-7 d-flex justify-content-center align-items-center">
        <Img {...data.signaturesComingSoon} alt="Ledgy signatures, powered by skribble" />
      </div>
    </div>
  );
};

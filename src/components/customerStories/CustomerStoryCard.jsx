// @flow

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const CustomerStoryCard = ({
  customerStory: { slug, company },
  prefix
}: {|
  customerStory: CustomerStory,
  prefix: string
|}) => {
  const pagePath = `${prefix}/customer-stories/${slug}/`;
  const logoImage = <Img className="fit-cover" {...company.logo.localFile.childImageSharp} />;
  const coverImage = <Img className="fit-cover" {...company.cover.localFile.childImageSharp} />;
  return (
    <div className="card hover-shadow-5 bg-pale-secondary mb-6 px-5">
      <Link href to={pagePath}>
        <div className="m-2">{logoImage}</div>
        {coverImage}
      </Link>
    </div>
  );
};

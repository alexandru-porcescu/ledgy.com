// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { ContentHeader, ContentBody, PostLink } from '../components/Content';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, data }: Props) => (
  <div>
    <Title
      title={i18n.t`Webinars`}
      description={i18n.t`Webinars on cap tables, financing rounds, and legal issues around running and managing a startup.`}
    />

    <ContentHeader heading={i18n.t`Ledgy Webinars`} />

    <ContentBody>
      {data.allContentfulWebinar.edges.map(edge => {
        const { node } = edge;
        const { id, youtube, description } = node;
        return (
          <PostLink
            external
            key={id}
            to={youtube}
            post={node}
            defaultImage={data.ledgy}
            description={
              <MDXProvider>
                <MDXRenderer>{description.childMdx.body}</MDXRenderer>
              </MDXProvider>
            }
          />
        );
      })}
    </ContentBody>
  </div>
));

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulWebinar(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMM YYYY")
          youtube
          description {
            childMdx {
              body
            }
          }
          cover {
            localFile {
              childImageSharp {
                ...CoverImage
              }
            }
          }
        }
      }
    }
  }
`;
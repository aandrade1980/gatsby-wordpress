import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PageTemplate = ({ data }) => {
  const { title, excerpt, content } = data.wordpressPage;
  return (
    <Layout>
      <SEO
        title={ title }
        description={ excerpt }
      />
      <h1>{ title }</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export default PageTemplate;

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`;

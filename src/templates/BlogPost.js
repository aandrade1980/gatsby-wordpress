import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const { title, excerpt, author, date, acf, content } = data.wordpressPost;
  return (
    <Layout>
    <SEO
      title={ title }
      description={ excerpt }
    />
    <h1>{ title }</h1>
    <p>
      Written by { author.name } on { date }
    </p>
    <Img
      sizes={ acf.feat_img.localFile.childImageSharp.sizes }
      alt={ title }
      style={{ maxHeight: 450 }}
    />
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </Layout>
  );
};

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      acf {
        feat_img {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`

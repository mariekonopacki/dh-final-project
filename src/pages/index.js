import React from 'react'
import _ from 'lodash'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      artSect: props.data.art.edges,
      botanySect:props.data.botany.edges,
      crimeSect:props.data.crime.edges,
      fantasySect:props.data.fantasy.edges,
      gothicSect:props.data.gothic.edges,
      horrorSect: props.data.horror.edges
    };
  }


  render() {
    const { artSect, botanySect, crimeSect, fantasySect, gothicSect, horrorSect } = this.state;
    return (

      <Layout>

        <div class="art-section">
          <h2>Art Books</h2>
          {artSect.map(post => (
            <div class="individual-work">
              <div class="i-w-column1">
                <img class="art-image" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
              </div>
              <div class="i-w-column2">
                <a href={post.node.frontmatter.url}><h3>{post.node.frontmatter.title}</h3></a>
                <h5> by {post.node.frontmatter.author}</h5>
                <p>{post.node.excerpt}</p>
                <h5> Total colors: {post.node.frontmatter.total_colors}</h5>
              </div>
            </div>
          ))
          }
        </div>

        <div class="botany-section">
          <h2>Botany Books</h2>
          {botanySect.map(post => (
            <div class="individual-work">
              <div class="i-w-column1">
                <img class="art-image" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
              </div>
              <div class="i-w-column2">
              <a href={post.node.frontmatter.url}><h3>{post.node.frontmatter.title}</h3></a>
              <h5> by {post.node.frontmatter.author}</h5>
              <p>{post.node.excerpt}</p>
              <h5> Total colors: {post.node.frontmatter.total_colors}</h5>
              </div>
            </div>
          ))
          }
        </div>

        <div class="crime-section">
          <h2>Crime Books</h2>
          {crimeSect.map(post => (
            <div class="individual-work">
              <div class="i-w-column1">
                <img class="art-image" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
              </div>
              <div class="i-w-column2">
                <a href={post.node.frontmatter.url}><h3>{post.node.frontmatter.title}</h3></a>
                <h5> by {post.node.frontmatter.author}</h5>
                <p>{post.node.excerpt}</p>
                <h5> Total colors: {post.node.frontmatter.total_colors}</h5>
              </div>
            </div>
          ))
          }
        </div>

        <div class="fantasy-section">
          <h2>Fantasy Books</h2>
          {fantasySect.map(post => (
            <div class="individual-work">
              <div class="i-w-column1">
                <img class="art-image" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
              </div>
              <div class="i-w-column2">
                <a href={post.node.frontmatter.url}><h3>{post.node.frontmatter.title}</h3></a>
                <h5> by {post.node.frontmatter.author}</h5>
                <p>{post.node.excerpt}</p>
                <h5> Total colors: {post.node.frontmatter.total_colors}</h5>
              </div>
            </div>
          ))
          }
        </div>

        <div class="gothic-section">
          <h2>Gothic Fiction Books</h2>
          {gothicSect.map(post => (
            <div class="individual-work">
              <div class="i-w-column1">
                <img class="art-image" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
              </div>
              <div class="i-w-column2">
                <a href={post.node.frontmatter.url}><h3>{post.node.frontmatter.title}</h3></a>
                <h5> by {post.node.frontmatter.author}</h5>
                <p>{post.node.excerpt}</p>
                <h5> Total colors: {post.node.frontmatter.total_colors}</h5>
              </div>
            </div>
          ))
          }
        </div>

        <div class="horror-section">
          <h2>Horror Books</h2>
          {horrorSect.map(post => (
            <div class="individual-work">
              <div class="i-w-column1">
                <img class="art-image" src={post.node.frontmatter.source.childImageSharp.sizes.src}></img>
              </div>
              <div class="i-w-column2">
                <a href={post.node.frontmatter.url}><h3>{post.node.frontmatter.title}</h3></a>
                <h5> by {post.node.frontmatter.author}</h5>
                <p>{post.node.excerpt}</p>
                <h5> Total colors: {post.node.frontmatter.total_colors}</h5>
              </div>
            </div>
          ))
          }
        </div>

      </Layout>

  )}
}


export default Index;

export const pieceQuery = graphql`
    query indexQuery {
      art: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/text_color_info/art/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              url
              total_colors
            }
            excerpt(pruneLength:500)
          }
        }
      },
      botany: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/text_color_info/botany/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              url
              total_colors
            }
            excerpt(pruneLength:500)
          }
        }
      },
      crime: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/text_color_info/crime/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              url
              total_colors
            }
            excerpt(pruneLength:500)
          }
        }
      },
      fantasy: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/text_color_info/fantasy/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              url
              total_colors
            }
            excerpt(pruneLength:500)
          }
        }
      },
      gothic: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/text_color_info/gothic_fiction/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              url
              total_colors
            }
            excerpt(pruneLength:500)
          }
        }
      },
      horror: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/text_color_info/horror/"}}) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              source {
                childImageSharp{
                  sizes(maxWidth: 630) {
                      src
                  }
                }
              }
              url
              total_colors
            }
            excerpt(pruneLength:500)
          }
        }
      }

    }
`

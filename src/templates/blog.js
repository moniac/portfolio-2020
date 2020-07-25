import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import GradientHeading from '../components/GradientHeading/GradientHeading';
import Layout from '../components/layout';
import Code from '../components/Code';
import theme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Slugger from 'github-slugger';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { BlogHeader } from '../components/BlogHeader/BlogHeader';
import { ThemeContext } from '../components/ThemeContext';
import GridLayout from '../Layouts/GridLayout';
import {
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share';

const slugger = new Slugger();

const LiveCode = props => (
  <div id="react-live">
    <LiveProvider code={props.children.props.children.trim()} theme={theme}>
      <LiveEditor />
      <LiveError />
      <center>
        <LivePreview />
      </center>
    </LiveProvider>
  </div>
);

const shortcodes = { Link }; // Provide common components here

const replacedComponents = {
  pre: preProps => {
    if (preProps.children.props['react-live']) {
      return <LiveCode {...preProps} />;
    }
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
  h1: props => <GradientHeading headingLevel={1} {...props} />,
  //   h2: props => <GradientHeading headingLevel={2} {...props} />,
  //   h3: props => <GradientHeading headingLevel={3} {...props} />,
  //   h4: props => <GradientHeading headingLevel={4} {...props} />,
  //   h5: props => <GradientHeading headingLevel={5} {...props} />,
  //   h6: props => <GradientHeading headingLevel={6} {...props} />,
};

const allComponents = { ...shortcodes, ...replacedComponents };

export default function PageTemplate({ data: { mdx } }) {
  const { colorMode } = React.useContext(ThemeContext);
  slugger.reset();

  return (
    <>
      <Layout showProgressBar={true}>
        <Helmet>
          <title>{mdx.frontmatter.title}</title>
          <meta
            name="description"
            content={`A blog post about ${mdx.frontmatter.title}`}
          />
          <meta name="author" content="Mohammed Mulazada" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 2rem',
          }}
        >
          <GridLayout>
            <MDXProvider title="test" components={allComponents}>
              <div className="blog-content lg:flex-1">
                <BlogHeader
                  title={mdx.frontmatter.title}
                  date={mdx.frontmatter.datePublished}
                  timeToRead={mdx.timeToRead}
                />
                <Img
                  className="Blog-Header-Image"
                  fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <MDXRenderer lightOrDarkmode={colorMode}>
                  {mdx.body}
                </MDXRenderer>
              </div>
            </MDXProvider>
            {Boolean(mdx.headings.length) && (
              <aside className="blog-sidebar hidden lg:block ml-40 sticky lg:flex-1">
                <ul>
                  <li className="mb-4 text-2xl">
                    <b>Table of Contents</b>
                  </li>
                  {mdx.headings.map((heading, i) => (
                    <li key={`${heading.value} - ${i}`}>
                      <Link
                        to={`${mdx.fields.slug}#${slugger.slug(heading.value)}`}
                      >
                        {heading.value}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <footer className="mt-8">
              <p className="mb-4 text-center">
                Did you like this article? <br /> If you did, please consider
                sharing :)
              </p>
              <div className="flex justify-center align-center">
                <EmailShareButton
                  bgStyle={'red'}
                  iconFillColor="white"
                  title={mdx.frontmatter.title}
                  url={`https://mohammedmulazada.com${mdx.fields.slug}`}
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <LinkedinShareButton
                  title={mdx.frontmatter.title}
                  url={`https://mohammedmulazada.com${mdx.fields.slug}`}
                  summary={'adsasdasdsadas'}
                  source={'adasda??????'}
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <RedditShareButton
                  title={mdx.frontmatter.title}
                  url={`https://mohammedmulazada.com${mdx.fields.slug}`}
                  size={20}
                  bgStyle={'red'}
                  iconFillColor="white"
                >
                  <RedditIcon size={32} round={true} />
                </RedditShareButton>
                <TwitterShareButton
                  title={mdx.frontmatter.title}
                  via={'thisismoniac'}
                  url={`https://mohammedmulazada.com${mdx.fields.slug}`}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                  title={mdx.frontmatter.title}
                  url={`https://mohammedmulazada.com${mdx.fields.slug}`}
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>
            </footer>
          </GridLayout>
        </div>
      </Layout>

      <script async defer type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "author": {
              "@type": "Person",
              "name": "Mohammed Mulazada",
              "url": "https://mohammedmulazada.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mohammed Mulazada",
              "url": "https://mohammedmulazada.com",
              "logo": {
                "@type": "ImageObject",
                "url": "http://www.example.com/logo.png",
                "width":"400",
                "height":"55"
              }
            },
            "image": "${
              mdx.frontmatter.featuredImage.childImageSharp.fluid.src
            }",
            "headline": "${mdx.frontmatter.title}",
            "datePublished": "${new Date(
              mdx.frontmatter.datePublished
            ).toISOString()}",
            "mainEntityOfPage": "true"
        }
    `}</script>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }, fields: { instance: { eq: "blog" } }) {
      id
      timeToRead
      body
      tableOfContents
      headings {
        depth
        value
      }
      fields {
        slug
        instance
      }
      frontmatter {
        title
        datePublished
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === 'code'
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : '',
      ...props,
    };
  }
}

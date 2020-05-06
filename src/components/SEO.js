import React from 'react';
import { Helmet } from 'react-helmet';
import urljoin from 'url-join';
import config from '../../data/SiteConfig';
import moment from 'moment'

function SEO(props) {
  const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``));
  const { postNode, postPath, postSEO } = props;
  let title;
  let description;
  let image = '';
  let postURL;
  
  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title;
    description = postMeta.description
    ? postMeta.description
    : postNode.excerpt;
    // image = postMeta.thumbnail;
    // if (postMeta.thumbnail) {
    //   image = postMeta.thumbnail.childImageSharp.sizes.src
    // }
    postURL = urljoin(config.siteUrl, replacePath(`${postPath}`));
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;
  }
  
  
  
  const getImagePath = (imageURI) => {
    if (!imageURI.match(`(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`)) {
      return urljoin(config.siteUrl, config.pathPrefix, imageURI);
    }
    return imageURI;
  };
  
  // image = getImagePath(image);
   image = `${config.siteUrl}/public/${postPath}/twitter-card.jpg`
  
  const getPublicationDate = () => {
    if (!postNode) return null;
    
    if (!postNode.frontmatter) return null;

    if (!postNode.frontmatter.date) return null;
    
    return moment(postNode.frontmatter.date, config.dateFromFormat).toDate();
  };
  
  
  // image = urljoin(config.siteUrl, image);

  const datePublished = getPublicationDate();

  const authorJSONLD = {
    '@type': 'Person',
    name: config.userName,
    email: config.userEmail,
    address: config.userLocation,
  };

  const logoJSONLD = {
    '@type': 'ImageObject',
    url: getImagePath(config.siteLogo),
  };

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        publisher: {
          ...authorJSONLD,
          '@type': 'Organization',
          logo: logoJSONLD,
        },
        datePublished,
        description,
      }
    );
  }
  return (
    <Helmet>
      <meta name='description' content={description} />
      <meta name='image' content={image} />

      <script type='application/ld+json'>
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property='og:url' content={postSEO ? postURL : blogURL} />
      {postSEO && <meta property='og:type' content='article' />}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta
        property='fb:app_id'
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={config.userTwitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
}

export default SEO;

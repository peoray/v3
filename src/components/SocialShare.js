import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';
import urljoin from 'url-join';
import config from '../../data/SiteConfig';

function SocialShare(props) {
  const { postNode, postPath, mobile } = props;
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const hashtagsArr = [
    ...post.tags,
    '100DaysOfCode',
    'CodeNewbie',
    'javascript',
    'coding',
    'WebDev',
  ];
  const hashtags = [...new Set(hashtagsArr)];

  return (
    <div className='flex flex-wrap my-6'>
      <p className='font-bold mr-4'>Share on:</p>

      {/* <RedditShareButton url={url} title={post.title} className='mr-4 mb-3 lg:mb-0'>
        <RedditIcon round size={32} />
      </RedditShareButton> */}
      <TwitterShareButton
        url={url}
        title={post.title}
        via='peoray_'
        hashtags={hashtags}
        className='mr-4 mb-3 lg:mb-0'
      >
        <TwitterIcon round size={32} />
      </TwitterShareButton>
      {/* <FacebookShareButton
        url={url}
        quote={postNode.description}
        className='mr-4 mb-3 lg:mb-0'
      >
        <FacebookIcon round size={32} />
      </FacebookShareButton> */}
      <LinkedinShareButton
        url={url}
        title={post.title}
        summary={postNode.description}
        source='peoray'
        className='mr-4 mb-3 lg:mb-0'
      >
        <LinkedinIcon round size={32} />
      </LinkedinShareButton>
      {/* <TelegramShareButton url={url} className=''>
        <TelegramIcon round size={32} />
      </TelegramShareButton> */}
    </div>
  );
}

export default SocialShare;

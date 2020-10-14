import urljoin from 'url-join';
import config from '../../data/SiteConfig';

const editOnGithub = (post) => {
  return urljoin(
    config.repo,
    '/blob/master/content/posts',
    `${post.slug}/index.md`
  );
};

// eslint-disable-next-line import/prefer-default-export
export { editOnGithub };

import urljoin from "url-join"
import moment from "moment"
import config from "../../data/SiteConfig"

const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat)
  return urljoin(
    config.repo,
    "/blob/develop/blog/posts",
    `${date}-${post.slug}.md`
  )
}


// eslint-disable-next-line import/prefer-default-export
export { editOnGithub }

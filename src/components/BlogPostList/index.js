import React from 'react'

import BlogPostCard from '../BlogPostCard'

import styles from './BlogPostList.module.scss'

export default ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map(({ node: item }) => {
        const post = item.frontmatter
        return (
          <li key={item.id} className={styles.listItem}>
            <BlogPostCard
              image={post.featured_image}
              altText={post.featured_image_alt}
              link={post.path}
              author={post.author}
              category={post.category}
              title={post.title}
              date={post.date}
              excerpt={post.the_excerpt}
            />
          </li>
        )
      })}
    </ul>
  )
}

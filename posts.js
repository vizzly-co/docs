import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import {markdownToHtml} from './markdownToHtml.js'

const getPostSlugs = (directory) => fs.readdirSync(directory)

const getPostContent = async (directory, postPath) => {
  const fullPath = join(directory, postPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const {data, content} = matter(fileContents)

  return {
    ...data,
    slug: postPath.replace(/\.md$/, ''),
    content: await markdownToHtml(content)
  }
}

export const getAllPosts = async (directory) => {
  const postSlugs = getPostSlugs(directory)
  const postsPromises = postSlugs.map((postPath) => getPostContent(directory, postPath))

  const posts = await Promise.all(postsPromises)

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}


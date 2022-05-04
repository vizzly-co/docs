import { writeFile, rm, mkdir } from 'fs'
import { join } from 'path'
import { getAllPosts } from './posts.js'

const DOCS_DIRECTORY = join(process.cwd(), 'content')
const DOCS_OUTPUT_DIRECTORY = join(process.cwd(), '.build')

const removeDir = (directory) => new Promise((resolve, reject) => {
    rm(directory, {recursive: true}, (err) => {
      err ? reject(err) : resolve()
    })
  })

const makeDir = (directory) => new Promise((resolve, reject) => {
    mkdir(directory, (err) => {
      err ? reject(err) : resolve()
    })
  })

async function buildPosts(directory, outputFolder) {
  await removeDir(outputFolder)
  await makeDir(outputFolder)

  let posts = await getAllPosts(directory)

  // write posts
  posts.forEach(post => {
    const content = JSON.stringify(post, null, 2)
    const outputFile = join(outputFolder, `${post.slug}.json`)


    writeFile(outputFile, content, 'utf8', () => {});
  })

  // write index content
  const indexContent = posts.map(post => ({
    title: post.title,
    author: post.author,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    ogImage: post.ogImage,
    slug: post.slug
  }))

  const indexOutputFile = join(outputFolder, `directory.json`)

  writeFile(indexOutputFile, JSON.stringify(indexContent, null, 2), 'utf8', () => {});
}

buildPosts(DOCS_DIRECTORY, DOCS_OUTPUT_DIRECTORY)
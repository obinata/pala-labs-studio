import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import blogPost from './schemas/blogPost'

export default defineConfig({
  name: 'pala-labs',
  title: 'Pala Labs Studio',
  projectId: 'iot4hik7',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [blogPost],
  },
})
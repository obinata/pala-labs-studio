import {defineType, defineField} from 'sanity'

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/)
  return match ? match[1] : null
}

function YouTubePreview({url}: {url?: string}) {
  const id = url ? getYouTubeId(url) : null
  if (!id) return <div style={{padding: '1rem', background: '#f0f0f0'}}>YouTube Video URL</div>
  return (
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      allowFullScreen
    />
  )
}

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube URL',
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
  ],
  components: {preview: YouTubePreview},
  preview: {select: {url: 'url'}},
})
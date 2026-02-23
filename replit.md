# Pala Labs Studio

Sanity CMS Studio for the Pala Labs website (palalabs.org).

## Project Structure
- `sanity.config.ts` — Sanity Studio configuration (project: iot4hik7, dataset: production)
- `schemas/blogPost.ts` — Blog post document schema (EN/JA bilingual fields)
- `schemas/youtube.tsx` — YouTube embed object type with preview

## Blog Post Schema Fields
- titleEn / titleJa — Post title (bilingual)
- excerptEn / excerptJa — Post excerpt (bilingual)
- contentEn / contentJa — Rich text content with images and YouTube embeds
- slug — URL slug (sourced from titleEn)
- featuredImage — OG/SNS share image (image with hotspot, recommended 1200×630px)
- category — Post category
- imageUrl — Legacy image URL field
- publishedAt — Publication date

## Running
```
npx sanity dev --host 0.0.0.0 --port 5000
```

## Notes
- CORS origins must be configured in Sanity project settings to allow the Replit preview URL

# Gallery photo pairs

Add optimized before-and-after photo pairs directly in this folder. The site discovers matching files automatically at build time and serves them as static assets through Vercel's CDN.

## File names

- `car01-before.webp` and `car01-after.webp`
- `car02-before.webp` and `car02-after.webp`
- Continue with `car03`, `car04`, `car05`, and so on.

Use the same camera angle, framing, and lighting for both photos in a pair. Keep the vehicle in the same position so the after image lines up cleanly when it fades over the before image. WebP is preferred for small, quick-loading files; `.jpg`, `.jpeg`, `.png`, `.avif`, and `.gif` are also recognized. For a crisp but responsive gallery, resize photos to about 1400 pixels on the long edge and compress them to roughly 400 KB or less when practical.

The gallery starts with four labeled placeholders. Add any number of pairs and they will appear automatically; incomplete pairs show a labeled placeholder until both photos are added. Hover or keyboard focus reveals the after photo on desktop. Tap toggles the comparison on touch screens.

The current cards use generic vehicle labels for the first four IDs. Update the `vehicleDetails` entries in `src/App.tsx` when adding real customer vehicles, and only publish photos you have permission to use.

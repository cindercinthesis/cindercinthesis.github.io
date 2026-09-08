# Set up repo

`npm install`

# Develop

`npm run dev`

# Build

`npm run build`
`astro build`

## Photography gallery order and layout

The gallery loads the `photography-front` Cloudinary folder in ascending `display_name` order. To control the sequence, change each asset's Display name in Cloudinary; numeric prefixes such as `01-`, `02-`, and `03-` make an explicit order easy to maintain.

The repeating organic layout remains the default. To override one asset, add these keys under its Cloudinary contextual metadata:

- `gallery_span`: `single`, `half`, `wide`, `full`, `pair-left`, or `pair-right`
- `gallery_align`: `top` or `bottom`

For a guaranteed side-by-side pair on desktop, place the assets next to each other in Display name order and set the first to `pair-left` and the second to `pair-right`. On narrower screens, the pair stacks so each photo stays readable.

Images wider than three times their height always span the full gallery width, regardless of metadata.

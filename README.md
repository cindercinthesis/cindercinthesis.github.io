# Set up repo

`npm install`

# Develop

`npm run dev`

# Build

`npm run build`
`astro build`

## Photography gallery order and layout

The gallery loads the `photography-front` Cloudinary folder in ascending `display_name` order. To control the sequence, change each asset's Display name in Cloudinary; numeric prefixes such as `01-`, `02-`, and `03-` make an explicit order easy to maintain.

There is no hard-coded repeating composition. An asset without layout metadata occupies one neutral single slot. Build the arrangement you want by adding these keys under each asset's Cloudinary contextual metadata:

- `gallery_span`: `single`, `half`, `wide`, or `full`
- `gallery_slot`: the photo's position and the total number in its row, such as `2/3`
- `gallery_align`: `top` or `bottom`

For a row of three consecutive photos, set `gallery_slot` to `1/3`, `2/3`, and `3/3`. For a row of four, use `1/4`, `2/4`, `3/4`, and `4/4`. Keep every group together in ascending Display name order. On narrower screens, grouped photos stack so each stays readable.

The original `gallery_span` pair values still work: `pair-left` and `pair-right`. Named thirds are also available as `triplet-left`, `triplet-mid`, and `triplet-right`; named quarters are `quadruplet-1`, `quadruplet-2`, `quadruplet-3`, and `quadruplet-4`. The older two-key form—`gallery_span=1/3` plus `gallery_position=2`, for example—also remains compatible. The single `gallery_slot` key is recommended.

Images wider than twice their height always span the full gallery width, regardless of metadata.

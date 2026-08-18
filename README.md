# Bang Thao Mae Bird & Nature Guide

Interactive static website concept for introducing birds and micro-habitats around **Bang Thao Mae Reservoir, Plai Phraya District, Krabi, Thailand**.

## Design direction

- Reference-inspired cinematic tropical forest / limestone-karst atmosphere
- Animated bird cards with glow and image zoom
- Flowing connector lines between cards
- Parallax landscape layers
- Floating line-art bird + particles
- Habitat filters and bird detail modal
- Responsive mobile/tablet/desktop layout
- Respects `prefers-reduced-motion`

## Bird images

The page requests thumbnails from the English Wikipedia REST summary API at runtime and displays Wikimedia-hosted images when available. A graphic fallback is shown if a thumbnail cannot be loaded.

## Important content note

The species list is intentionally presented as a **nature-interpretation / preliminary survey list**, not as a verified ornithological inventory of the reservoir. Confirm actual occurrence with a field bird survey before publishing any claim that a species has been recorded at the site.

## Run locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages

A Pages deployment workflow is included. If Pages is not already configured for this repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions** once.

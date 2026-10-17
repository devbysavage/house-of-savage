# Migration and QA notes

## Original project review
The supplied archive was a static HTML/CSS/vanilla JavaScript site, not an existing Next.js/React project. Main source files included `homepagee.html`, `mens-jewelry.html`, `womens-jewelry.html`, `Rings.html`, `luxury-wristwatches.html`, `signup.html`, `style.css`, `mens-jewelry.css`, `signup.css`, and `Homepage.js`.

Issues observed in the original source included:
- inconsistent `Assets`/`assets` capitalization in image paths;
- mismatched or outdated page links and missing pages referenced from navigation/footer;
- duplicate `fadeIn` keyframes and conflicting sizing rules;
- gallery code assumes carousel buttons and tracks exist, and uses separate indices that can drift out of sync;
- the hero video assets were each about 60 MB;
- the signup form had no actual authentication integration and malformed social-link markup.

## Refactor choices
- Migrated to Next.js App Router with shared header/footer, catalog data, reusable product cards and responsive pages.
- Created routes for Home, Men's Jewelry, Women's Jewelry, Rings, Watches, About, Contact, Account and Search.
- Replaced the homepage billboard video with an image marquee; it pauses on hover/focus and supports reduced-motion preferences.
- Kept six product clips for the video gallery and made the video elements use `preload="none"` so they do not download video data until needed. The original 60 MB billboard videos were not copied into the new public directory.
- Converted supplied photos to WebP and resized to a maximum 1800px edge. The source-to-output mapping is in `asset-migration-map.json`.
- All image and video paths referenced by the new source were checked against files in `public/`.

## Before production
- Connect newsletter forms to an email marketing service or a backend API.
- Connect account forms to a real authentication provider; no credentials are stored by this frontend.
- Verify product names, exact stone identity (natural diamond vs moissanite), metal purity, certification, pricing and stock against current inventory. The original archive does not reliably establish these facts for every photo.
- Confirm whether the watch images and brand references should remain part of the live jewelry storefront.
- Run `npm install`, `npm run typecheck` and `npm run build` in an environment with package registry access. Dependency installation could not be completed in the current working environment, so a production build has not been claimed as verified.

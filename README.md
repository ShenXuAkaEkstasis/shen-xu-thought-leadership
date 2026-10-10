# Shen Xu — Thought Leadership Evidence Hub (Preview)

A static, zero-dependency editorial website built as a review preview for a personal Thought Leadership award entry. Visual language follows the ASO Evaluator V5 white paper: near-black/white, sharp lime, oversized typography, and restrained technical motion.

## Deploy to Vercel

1. Create a **private** GitHub repository, e.g. `aso-evidence-hub`.
2. Upload all the files **preserving the folder structure** (including `assets/`).
3. In Vercel select **Add New → Project → Import Git Repository**.
4. Framework preset: **Other**; Root directory: repository root. No build command or environment variables required.
5. Review on its assigned `*.vercel.app` preview domain before assigning an existing WinBy custom domain.
6. To replace the old WinBy site, first remove the relevant custom domain from the old Vercel project, then add it to the new one. Only change DNS if Vercel requests it.

## Before public deployment

- User has confirmed the customer testimonials. Confirm only Hank's surname spelling (Ong/Wong) before external publication. The page presents edited excerpts.
- Confirm permission to publicly identify clients and show any test summaries.
- Verify all aggregate metrics, time scopes, source records, and benchmark comparability. Dashboard exhibits are **reconstructed presentations**, never original backend recordings.
- Confirm the arXiv, book, and membership representations and external links; some retail links may be unavailable in certain regions.
- Ensure the selected MP4 is the final approved demonstration; it is a UI concept video, not a recording of one live transaction.
- Update the `PREVIEW BUILD` footer once the remaining identity, metrics and source checks are complete.

## Performance and behavior

- No frameworks, tracking scripts, third-party fonts, or remote image dependencies.
- No auto-playing video. MP4 loads only when opened in the modal.
- All nine evidence screenshots are compressed WebP and only loaded on demand in the gallery.
- CSS-only subtle motion; honors `prefers-reduced-motion`.
- Mobile menu, arrow-key evidence navigation, escape to close dialogs, and clear focus indicators.

## Files

- `index.html` — accessible semantic content and source links
- `styles.css` — responsive design and animations
- `script.js` — gallery, video modal, navigation
- `assets/media` — white paper, approved video concept, poster
- `assets/cases` — nine reconstructed case dashboards

## Public product record

The Evidence Library provides Hugging Face (live research preview) and Product Hunt (public launch listing) links; neither is presented as independent scientific validation. IEEE / IEEE TEMS are listed as memberships, not endorsements.

## V4 refinements

- Clarified the researcher’s distinct intellectual contribution on the hero, connecting ASO, A2A Commerce, and DAE without claiming a commercial test validates all three theories.
- Explained why the featured Eliva Press book matters beyond its page count.
- Replaced unsupported `BEFORE 0/30` with a qualitative “near-zero” initial observation; retained post-implementation `27/30`, 90% with scope disclosure.
- Kept customer-approved testimony and removed an outdated approval disclaimer.
- Preserved evidence gallery, white paper, Hugging Face and Product Hunt.

# Luma — Buzzvel Frontend Challenge

Responsive landing page built with Next.js App Router, TypeScript and Tailwind CSS.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Project structure

```text
src/
  app/
    globals.css       # Global design system and responsive styles
    layout.tsx        # Metadata and root layout
    page.tsx          # Page composition
  components/
    header.tsx
    hero.tsx
    categories.tsx
    featured-course.tsx
    how-it-works.tsx
    testimonial.tsx
    people.tsx
    contact.tsx
    final-cta.tsx
    footer.tsx
```

## Implemented

- Desktop, tablet and mobile layouts.
- Mobile navigation menu with accessible expanded state.
- Anchor navigation between page sections.
- Contact form with client-side required-field validation and success feedback.
- Semantic landmarks, heading hierarchy, descriptive image alternatives and form labels.
- Page title and meta description.
- Reduced-motion preference support.
- Reusable section components and typed React components.

## Design decisions and assumptions

The supplied Figma file could not be inspected directly. The implementation therefore follows the written design brief and the two supplied reference screenshots. The exact first-screen hero and course imagery were not supplied as separate assets, so the page uses externally hosted Unsplash photographs as replaceable placeholders. Replace these image URLs with the official exported Figma assets before final submission if they become available.

The brief describes the lower page sections in screenshots. Their composition, copy hierarchy and palette have been recreated as closely as possible from those references. Some small decorative shapes and spacing values are approximations where the screenshots did not expose exact design tokens.

The contact form is a frontend-only mock: it validates required fields and displays a confirmation, but it does not submit to a backend, as backend integration is outside the challenge scope.

## Notes

- Font families: Manrope for display headings and DM Sans for interface/body copy, loaded from Google Fonts.
- All image URLs can be replaced in the relevant component files.
- Navigation labels and sample course content are local mock data.

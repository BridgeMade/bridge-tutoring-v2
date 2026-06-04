@AGENTS.md

# Bridge Tutoring Website

## Project overview
Lead-capture website for Bridge Tutoring — a human-matched tutoring service in Pretoria and Johannesburg, South Africa. Not a marketplace. All matching is handled manually by the Bridge team after form submission.

## Tech stack
- Framework: Next.js 14 (App Router), TypeScript
- Styling: Tailwind CSS (utility-first, no inline styles)
- Hosting: Cloudflare Pages
- Forms: React Hook Form
- Email: Resend
- WhatsApp: Meta WhatsApp Business Cloud API
- Analytics: Google Analytics 4

## Common commands
- `npm run dev` — start dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Colour system
- Parent journey accent: teal (primary brand)
- Tutor journey accent: purple
- Custom tokens defined in tailwind.config.ts

## Code conventions
- All components: functional, no class components
- Async: async/await only, no .then() chains
- Exports: named exports for components, default exports for pages
- File naming: PascalCase for components, camelCase for utilities
- No inline styles — Tailwind utility classes only
- Generous rounding: rounded-2xl for cards, rounded-xl for buttons/inputs
- Mobile-first responsive design

## Form architecture
- Parent request form: 6 steps (app/request-tutor/)
- Tutor application form: pitch screen + 5 steps (app/become-tutor/)
- Both forms: two-panel layout (coloured left panel + white question panel)
- Both submit to API routes which call Resend + WhatsApp in parallel via Promise.allSettled
- Back navigation must preserve previously entered data

## API routes
- POST /api/submit-parent — parent request form submission
- POST /api/submit-tutor — tutor application form submission
- Both use edge runtime

## Integration architecture
- Phase 1 (current): Email (Resend) + WhatsApp (Meta API) notifications only
- Phase 2: Feza CRM — stub at lib/feza.ts, implement functions there when ready

## Security rules
- Never commit API keys — use .env.local only
- All user inputs sanitised before use in API routes
- POPIA compliance required — privacy policy must be live before launch

## Design principles
- Airbnb warmth + Preply clean form aesthetic
- Mobile-first, all layouts work at 320px+
- Touch targets min 44x44px
- Section padding: py-20 to py-24
- Trust signals on every page
- No dead ends — every page has a clear next action

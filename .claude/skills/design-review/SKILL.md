---
name: design-review
description: UI/UX design review covering visual consistency, accessibility (WCAG AA+),
  responsive design, and interaction quality.
context: fork
agent: Explore
allowed-tools: Read, Bash, Glob, Grep
isolation: worktree
---

Perform a comprehensive design and UX review of recent frontend changes. Run
`git diff HEAD~1` to see what changed, then inspect the affected components.

## Review Areas

### Visual Consistency
- Consistent spacing, typography, and colour usage
- Adherence to design system / Tailwind tokens
- Visual hierarchy is clear and logical
- No mismatched component styles

### Accessibility (WCAG AA minimum)
- All images have meaningful alt text
- Sufficient colour contrast ratios (4.5:1 for text)
- All interactive elements keyboard-navigable
- Focus states visible and clear
- Correct ARIA roles and labels
- Screen reader friendly structure

### Responsive Design
- Layout works on mobile (320px+), tablet, and desktop
- No horizontal scrolling on small viewports
- Touch targets at least 44x44px on mobile
- Text remains readable at all breakpoints

### Interaction & Feedback
- Loading states for async actions
- Error states clearly communicated
- Success feedback after user actions
- Empty states handled gracefully

### Code Health (Frontend)
- No inline styles (use utility classes)
- Components are appropriately reusable
- Props have clear naming and types

## Output Format

Classify findings as:
- **MUST FIX**: Accessibility failure or broken layout
- **SHOULD FIX**: UX inconsistency or standards violation
- **POLISH**: Visual refinement suggestion
- **GOOD**: Well-executed pattern

Reference specific components, files, and line numbers.

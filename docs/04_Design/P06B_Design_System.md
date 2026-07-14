# P06B – Enterprise Design System Specification
> **Status**: COMPLETE

## 1. Overview
The **Enterprise Design System** operationalizes the principles defined in the *Design Constitution of Om* (P06A). It provides a single source of truth for visual, interaction, and implementation guidelines, enabling designers and engineers to create consistent experiences across all platforms (web, mobile, desktop, voice, AR/VR, and physical installations).

## 2. Design Tokens
All tokens are stored in `packages/config/tokens.json`. The file follows the **Design Tokens Specification** (https://design-tokens.org/) and uses **HSL** for color values, **rem** for spacing, and **px** for border‑radius.
```json
{
  "color": {
    "primary": { "base": "hsl(210,65%,45%)", "light": "hsl(210,65%,60%)", "dark": "hsl(210,65%,30%)" },
    "secondary": { "base": "hsl(30,80%,45%)", "light": "hsl(30,80%,60%)", "dark": "hsl(30,80%,30%)" },
    "accent": { "base": "hsl(120,50%,40%)", "light": "hsl(120,50%,55%)", "dark": "hsl(120,50%,25%)" },
    "neutral": { "white": "hsl(0,0%,100%)", "gray-100": "hsl(0,0%,95%)", "gray-300": "hsl(0,0%,80%)", "gray-500": "hsl(0,0%,60%)", "gray-700": "hsl(0,0%,40%)", "black": "hsl(0,0%,0%)" }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "xxl": "3rem"
  },
  "typography": {
    "fontFamily": "'Inter', system-ui, sans-serif",
    "fontFamilyMonospace": "'Fira Code', monospace",
    "fontSize": {
      "display": "clamp(2.5rem, 5vw, 4rem)",
      "h1": "clamp(2rem, 4vw, 3rem)",
      "h2": "clamp(1.75rem, 3.5vw, 2.5rem)",
      "h3": "clamp(1.5rem, 3vw, 2rem)",
      "body": "clamp(1rem, 2.5vw, 1.125rem)",
      "caption": "clamp(0.75rem, 2vw, 0.875rem)"
    },
    "lineHeight": 1.5,
    "fontWeight": { "regular": 400, "medium": 500, "bold": 600 }
  },
  "borderRadius": {
    "sm": "0.125rem",
    "md": "0.25rem",
    "lg": "0.5rem",
    "pill": "9999px"
  },
  "elevation": {
    "shadow0": "none",
    "shadow1": "0 1px 3px rgba(0,0,0,0.12)",
    "shadow2": "0 4px 6px rgba(0,0,0,0.15)"
  }
}
```
> **Note** – The CI pipeline validates token JSON against the schema and runs WCAG contrast checks for each color pair.

## 3. Layout & Grid System
- **Base Grid** – 8 dp (device‑independent pixels) spacing unit. All margins, paddings, and component sizes are multiples of 8 dp.
- **Responsive Columns** – 12‑column grid on desktop (min‑width 1024 px), 8‑column grid on tablet (min‑width 600 px), and single‑column fluid layout on mobile.
- **Breakpoint Tokens** – `breakpoint.sm: 600px`, `breakpoint.md: 1024px`, `breakpoint.lg: 1440px`.
- **Container Widths** – `maxWidth.sm: 540px`, `maxWidth.md: 720px`, `maxWidth.lg: 960px`, `maxWidth.xl: 1200px`.

## 4. Component Library
All components live in `packages/ui/src/`. Each component follows the **Atomic Design** methodology and is published as a Lit‑Element Web Component (`@om/ui`).
### 4.1 Core Components
| Component | Description | Props | Accessibility |
|-----------|-------------|-------|---------------|
| **Button** | Primary, secondary, tonal, and ghost variants. Includes loading state. | `variant`, `size`, `disabled`, `icon` | Keyboard focus, `aria-pressed` for toggle, visible focus ring using `accent` color. |
| **Card** | Elevation‑aware container for content blocks. | `elevation`, `interactive` | `role="region"`, `tabIndex=0` when interactive. |
| **Dialog** | Modal overlay with focus trap. | `open`, `title`, `size` | `aria-modal`, `aria-labelledby`, `Esc` to close. |
| **NavigationDrawer** | Adaptive side navigation that collapses on small screens. | `open`, `items` | Keyboard navigation with arrow keys, `aria-expanded`. |
| **SearchBar** | Input with optional voice search button. | `placeholder`, `value`, `onSearch` | `label` association, role `search`. |
| **Avatar** | Circular image or initials. | `src`, `alt`, `size` | `alt` text required, fallback initials. |
| **Tooltip** | Contextual helper on hover/focus. | `content`, `position` | `aria-describedby` linking. |
| **ProgressBar** | Linear progress with optional label. | `value`, `max`, `indeterminate` | `role="progressbar"`, `aria-valuenow`. |

### 4.2 Specialized Components
- **JourneyMap** – Interactive timeline visualizing Civilization Journeys (e.g., Ramayana, Vedas). Supports zoom, pan, and contextual popovers.
- **ScriptureReader** – Paginated view with inline annotations, verse navigation, and audio playback controls.
- **KnowledgeGraph** – Node‑link visualization using force‑directed layout; color‑coded by ontology segment.
- **VoiceAssistantChip** – Activates the Om voice assistant with contextual hints.

## 5. Theming & Mode
- **Light / Dark Mode** – System‑aware, with explicit toggle. Tokens for each mode are defined under `color.lightMode` and `color.darkMode`.
- **Cultural Themes** – Optional thematic overrides (e.g., *Vastu* theme, *Festival* theme) that adjust accent colors and background imagery while preserving accessibility.
- **Dynamic Token Resolution** – At runtime, the UI library reads `tokens.json` and merges the active theme using a **CSS Custom Property** map (`--om-color-primary`, etc.).

## 6. Interaction Patterns
| Pattern | Description | Example |
|---------|-------------|---------|
| **Progressive Disclosure** | Reveal advanced options only when user knowledge level > *novice*. | Settings “Advanced” section toggles based on user profile. |
| **Contextual Navigation** | Navigation items adapt to *learning path*, *previous reading history*, *current festival*, and *time of day* (e.g., night‑mode suggestions). | Main menu shows “Morning Prayers” at sunrise, “Evening Reflections” at dusk. |
| **Micro‑Animation** | 150‑300 ms feedback for clicks; 500‑800 ms for view transitions. | Button press ripple, card elevation lift. |
| **Voice‑First Interaction** | Voice commands trigger UI actions with visual focus highlights. | “Hey Om, open the Bhagavad Gītā.” |

## 7. Accessibility Implementation Checklist
- **Contrast** – All text meets WCAG AA; automatically validated via CI.
- **Focus Management** – Focus trap in dialogs, logical tab order, visible focus indicator (4 dp outline using `accent`).
- **Screen Reader** – All interactive elements have appropriate ARIA roles/labels.
- **Responsive Text** – `clamp()` ensures scaling up to 200 % without overflow.
- **Keyboard Shortcuts** – Global shortcuts documented in `docs/04_Design/Keyboard_Shortcuts.md`.
- **Testing** – End‑to‑end aXe tests run on each PR; regression tests include VoiceOver & TalkBack scenarios.

## 8. Documentation & Reference
- **Component API Docs** – Generated via TypeDoc, hosted at `docs/04_Design/components/`.
- **Design Tokens Explorer** – Interactive web app `packages/ui/tokens-explorer/` for designers to preview token changes.
- **Usage Guidelines** – Each component folder contains a `README.md` with usage, variants, and code snippets.
- **Change Log** – `CHANGELOG.md` at repository root tracks design system version updates.

## 9. Governance & Versioning
1. **Design Review Board (DRB)** – Cross‑functional team (design, engineering, cultural scholars). All token or component changes require DRB sign‑off (see ADR‑003). 
2. **Semantic Versioning** – `@om/ui` follows MAJOR.MINOR.PATCH. Breaking UI changes bump MAJOR.
3. **Contribution Process** – External contributors submit a PR with the **Design Contribution Template** located at `contrib/DESIGN_CONTRIBUTION.md`.
4. **Audit Trail** – Every change logs author, rationale, accessibility impact, and cultural review outcome in `docs/09_Decisions/`.

## 10. Future Extensions
- **AR/VR UI Kit** – 3‑D components built on WebXR, inheriting token colors and motion curves.
- **Physical Installation UI** – Guidelines for large‑format displays, tactile controls, and ambient lighting.
- **AI‑Generated Theme Variants** – Controlled experiments where an LLM proposes thematic palettes, subject to DRB approval.

---
*Prepared by the Om Design System Team – July 2026*

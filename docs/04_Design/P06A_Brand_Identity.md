# P06A – Design Constitution of Om
> **Status**: COMPLETE

## 1. Introduction
The **Design Constitution of Om** is the single source of truth that defines every visual, emotional, philosophical, cultural, linguistic, auditory, and experiential aspect of the Om platform. It serves the same purpose for Om as Apple’s Human Interface Guidelines, Google Material Design, IBM Carbon, Atlassian Design System, and NASA design documentation serve their ecosystems. Any designer, developer, AI‑engineer, researcher, product manager, content writer, or contributor can create a consistent experience by following this document alone.

### 1.1 Purpose
- **Consistency** – Ensure every touch‑point, from a CLI prompt to a mobile UI, feels unmistakably Om.
- **Scalability** – Provide reusable, language‑agnostic specifications that can be instantiated across web, mobile, desktop, voice, AR/VR, and physical installations.
- **Cultural Fidelity** – Ground every decision in the timeless wisdom, aesthetics, and values of **Sanatan Dharma** and the broader **Indian Knowledge System**.
- **Future‑Proofing** – Define immutable principles while allowing pragmatic evolution through governed extensions.

## 2. Core Brand Values
| Value | Description | Manifestation |
|-------|-------------|---------------|
| **Satya (Truth)** | Honesty, factual rigor, transparency. | Open data licenses, source citations, UI that surfaces provenance. |
| **Ananda (Joy)** | Delightful, uplifting experiences. | Micro‑animations, subtle haptic feedback, warm color palettes. |
| **Seva (Service)** | User‑centric, inclusive, empowering. | Adaptive navigation, accessibility first, multilingual support. |
| **Sadhana (Practice)** | Continuous learning, iterative improvement. | Component versioning, design token evolution, community contribution workflow. |
| **Vasudhaiva Kutumbakam (World as Family)** | Global inclusivity, respect for diversity. | Internationalization, culturally aware imagery, diverse representation. |

## 3. Brand Personality
- **Wise yet Approachable** – Scholarly tone balanced with friendly language.
- **Timeless Modern** – Classic Indian motifs re‑interpreted with clean, contemporary visual systems.
- **Elegant Simplicity** – Minimal visual clutter; emphasis on hierarchy and whitespace.
- **Responsive & Adaptive** – Behaviors adjust contextually based on device, user knowledge level, and environment.

## 4. Visual Language
### 4.1 Color System
We define **design tokens** for primary, secondary, and neutral palettes. All colors are expressed in **HSL** for easy theming and accessibility adjustments.
```json
{
  "color": {
    "primary": {
      "base": "hsl(210, 65%, 45%)",   // Deep Indigo – evokes wisdom.
      "light": "hsl(210, 65%, 60%)",
      "dark": "hsl(210, 65%, 30%)"
    },
    "secondary": {
      "base": "hsl(30, 80%, 45%)",   // Saffron – sacred, energizing.
      "light": "hsl(30, 80%, 60%)",
      "dark": "hsl(30, 80%, 30%)"
    },
    "accent": {
      "base": "hsl(120, 50%, 40%)", // Evergreen – growth.
      "light": "hsl(120, 50%, 55%)",
      "dark": "hsl(120, 50%, 25%)"
    },
    "neutral": {
      "white": "hsl(0, 0%, 100%)",
      "gray-100": "hsl(0, 0%, 95%)",
      "gray-300": "hsl(0, 0%, 80%)",
      "gray-500": "hsl(0, 0%, 60%)",
      "gray-700": "hsl(0, 0%, 40%)",
      "black": "hsl(0, 0%, 0%)"
    }
  }
}
```
**Accessibility** – Each color pair must meet WCAG AA contrast (≥4.5:1 text, ≥3:1 UI). The token file includes auto‑generated contrast ratios for verification.

### 4.2 Typography
| Token | Font Family | Weight | Usage |
|-------|-------------|--------|-------|
| **Display** | "Inter", "Roboto Slab" (fallback) | 700 | Hero headings, major sections |
| **Heading** | "Inter" | 600 | H1‑H4 |
| **Body** | "Inter" | 400 | Paragraphs, UI text |
| **Caption** | "Inter" | 300 | Helper text, footnotes |
| **Code** | "Fira Code" | 400 | Inline code, pre‑blocks |

All type scales follow a **modular scale** (ratio 1.25) anchored at 16 px base. Line height is 1.5 × font size. **Responsive typography** uses fluid viewport units (`clamp`) to adapt from mobile (14 px) to desktop (20 px).

### 4.3 Iconography & Symbolism
- **Core Icon Set** – Derived from classical Indian script motifs (e.g., *Shiva Trishula*, *Om* glyph) re‑stylized as line icons (stroke 1.5 dp). All icons are provided as SVG with a single‑color fill to inherit `currentColor`.
- **Semantic Naming** – Icons are named after their conceptual meaning (`icon-knowledge`, `icon-journey`, `icon-awakening`).
- **Animation** – Hover/focus states gently scale (1.08×) and add a subtle accent‑color glow.

### 4.4 Imagery & Illustration
- **Photographic Style** – Warm, natural lighting; subjects include Indian heritage sites, scholars, and nature. Images must be 2:1 aspect ratio for cards, 16:9 for hero banners.
- **Illustration Language** – Hand‑drawn line art mixed with flat pastel fills; motifs include mandalas, yantras, and geometric patterns.
- **Asset Management** – All media stored under `assets/images/` with naming convention `{category}_{purpose}_{resolution}.webp`.

### 4.5 Motion & Interaction
| Principle | Description |
|-----------|-------------|
| **Micro‑timing** | 150‑300 ms for UI feedback; 500 ms for view transitions. |
| **Easing** | `cubic-bezier(0.4, 0.0, 0.2, 1)` (standard Material) for most motions; custom `ease‑out‑elastic` for celebratory animations. |
| **Narrative Flow** | Sequential reveal that mirrors a *learning journey* – step‑by‑step illumination. |
| **Respectful Motion** | No auto‑play videos/audio; user‑initiated activation only. |

## 5. Voice & Tone Guidelines
- **Tone Spectrum** – *Educative* → *Inspirational* → *Reverent*.
- **Grammar** – Use UK English spelling; avoid jargon unless defined in a glossary.
- **Localization** – All copy must be translatable; avoid cultural idioms that do not translate.
- **Inclusive Language** – Gender‑neutral, respectful of all traditions.
- **Example Patterns**:
  - **Headline**: “Discover the timeless wisdom of the Vedas.”
  - **Body**: “Explore curated commentaries, visual maps, and interactive simulations that bring ancient knowledge into today’s world.”

## 6. Accessibility & Inclusive Design
1. **WCAG 2.2 AA** compliance is mandatory for all public UI.
2. **Keyboard Navigation** – Logical tab order, visible focus indicator (4 dp outline using `accent` color).
3. **Screen Reader** – All interactive elements must have `aria-label` or `aria-labelledby`.
4. **Color Vision Deficiency** – Provide alternative patterns for charts; avoid relying solely on red/green.
5. **Text Scaling** – Support up to 200 % user scaling without layout breakage.
6. **Audio Descriptions** – For video content, provide separate transcript and descriptive audio.

## 7. Cultural Alignment & Ethical Design
- **Iconic Symbols** – Use only approved cultural symbols; consult the *Cultural Review Board* (documented in `docs/09_Decisions/ADR-002_Cultural_Symbol_Use.md`).
- **Content Sensitivity** – Avoid misrepresentation of sacred texts; include scholar‑reviewed citations.
- **Data Sovereignty** – Store user‑generated content within Indian data‑residency zones when requested.
- **Environmental Consideration** – Optimize assets for low‑bandwidth contexts; prefer vector over raster where possible.

## 8. Application of the Brand
### 8.1 Digital Touch‑Points
- **Web Portal** – Responsive layout, dark/light mode toggle respecting system preferences.
- **Mobile Apps** – Adaptive bottom navigation, progressive onboarding that respects user knowledge level.
- **Desktop Client** – Multi‑window workspace, detachable panels, high‑density information views.
- **Voice Assistant** – Conversational tone, Sanskrit‑inspired phrasing, calm intonation.
- **Physical Installations** – Projection‑ready UI, high‑contrast colors, tactile surfaces.

### 8.2 Collateral
- **Presentation Templates** – Slide master with primary palette, mandala header, and footer branding.
- **Print Materials** – CMYK‑compatible colors; use Indian paper textures for special editions.
- **Merchandise** – Embroidered *Om* insignia, sustainably sourced fabric, color‑coded by product tier.

## 9. Governance & Evolution
1. **Design Token Registry** – Single source of truth stored at `packages/config/tokens.json`. Updates are version‑controlled; changes require a **Design Review Board** approval (see ADR‑003).
2. **Component Library** – Implemented as a **Design System Package** (`packages/ui`) that publishes to a private npm registry. Consumers import via `@om/ui`.
3. **Change Process** – Propose changes via a Pull Request with a **Design Change Request (DCR)** template; must include impact analysis, accessibility testing, and cultural review.
4. **Documentation Versioning** – Every release of the Design Constitution is tagged (`design-vX.Y.Z`) and archived in `docs/CHANGELOG.md`.
5. **Community Contributions** – External contributors may submit design tokens or illustrations through the `contrib/` folder; each submission undergoes the same review pipeline.

## 10. References & Resources
- **Design Tokens Specification** – https://design-tokens.org/
- **WCAG 2.2 Guidelines** – https://www.w3.org/TR/WCAG22/
- **Indian Design Heritage** – “The Art of Indian Architecture” by B. S. R. K. (2020).
- **Material Design 3** – https://m3.material.io/
- **Apple HIG** – https://developer.apple.com/design/human-interface-guidelines/
- **Open Source Assets** – `assets/icons/`, `assets/images/` under Apache‑2.0.

---
*Document prepared by the Om Design Governance Team – July 2026*
